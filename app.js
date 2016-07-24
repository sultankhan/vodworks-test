var express = require('express');
var request = require("request");
var url  = require('url');

var app = express();

   app.use(
      "/", 
      express.static(__dirname) 
   );
	
	// route to get base64 from an image url. 
	
   /* app.get('/getImageData', function(req, res) {
		var params       = url.parse(req.url, true).query;
		var imageURL     = params.url || params.uri || params.image;
		request(
				{url: imageURL, encoding: 'binary'},
				function onImageResponse(error, imageResponse, imageBody) {
				  if (error) throw error;

				  var imageType   = imageResponse.headers['content-type'];
				  var base64      = new Buffer(imageBody, 'binary').toString('base64');
				  var dataURI     = 'data:' + imageType + ';base64,' + base64;
				  
				  var jsonString  = JSON.stringify({
					data: dataURI
				  });
				  
				  var jsonpString = callbackName + '(' + jsonString + ')';
				  var payload     = callbackName ? jsonpString : jsonString;

				  res.writeHead(imageResponse.statusCode, {'Content-Type': 'application/json'});
				  res.write(payload);
				  res.end();
				  
				}
			  );
   }); */

   // force cache.
   
app.use(function (req, res, next) {
    if (req.url.match(/^\/(css|js|img|font)\/.+/)) {
        res.setHeader('Cache-Control', 'public, max-age=3600');
    }
    next();
});

app.listen(3000, function () {
  console.log('listening on port 3000...');
});