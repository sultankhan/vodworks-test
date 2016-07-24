var theaterApp = angular.module("theaterApp", ['ngDialog']);

theaterApp.directive('checkImage', function() {
   return {
      link: function(scope, element, attrs) {
		  
         element.bind('error', function() {
            element.attr('src', '/images/no_image.png'); // set default image
         });
       }
   }
});



/*  theaterApp.directive('renderImage', ['$http', 'imageCache', 'getImageData', function ($http,imageCache,getImageData){
	return {
		link: function (scope,element, attr){
			attr.$observe('src', function(value) {
				console.log('src=', value);
				
			 var data = getImageData.getData(value);
				console.log(data);
			
			});
			
		}
	}
}]);  */


theaterApp.factory('imageCache', function($cacheFactory) {
 return $cacheFactory('imageData');
});

theaterApp.config(function($routeProvider){
  console.log($routeProvider);
  $routeProvider
.when("/",{
  controller: "MoviesCtrl",
  templateUrl: "js/views/moviesView.html"
});

$routeProvider.otherwise({"redirectTo": "/"}); 
});