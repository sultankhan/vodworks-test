theaterApp.controller("MoviesCtrl", function ($scope, $http,ngDialog) {
	$http.get("/js/data/movies.json")
	.then(function (results) {
		//Success;
		console.log("Succss: " + results.status);
		$scope.movies = results.data;
	}, function (results) {
		//error
		console.log("Error: " + results.data + "; "
			 + results.status);
	});
	
	
	$scope.clickToOpen = function (index) {
		var maxLength = 400;
		var trimmedSynopsis = $scope.movies[index].synopsis.substr(0, maxLength);
		trimmedSynopsis = trimmedSynopsis.substr(0, Math.min(trimmedSynopsis.length, trimmedSynopsis.lastIndexOf(" ")));
		$scope.currentSynopsis = trimmedSynopsis;
		$scope.currentCasts = $scope.movies[index].cast;
		$scope.currentQuote = $scope.movies[index].quote;
		$scope.currentYear = $scope.movies[index].year;
		$scope.currentGenres = $scope.movies[index].genres;
		$scope.currentDirectors = $scope.movies[index].directors;
		$scope.currentHeadline = $scope.movies[index].headline;
		$scope.currentImages = $scope.movies[index].cardImages;
		$scope.currentVideoUrl = $scope.movies[index].videos[0].url;
		$scope.currentVideoTitle = $scope.movies[index].videos[0].title;
        ngDialog.open({  width: '900', height: '550', template: 'popup.html', className: 'ngdialog-theme-default',scope: $scope });
    };
});