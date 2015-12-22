var omdbapi = function($http){
	var getMediaInfo = function(keyword){
		return $http.get('http://www.omdbapi.com/?s=' + keyword)
					.then(function(response){
						return response.data;
					});
	};

	var getMovieInfo = function(title, year){
		return $http.get('http://www.omdbapi.com/?t=' + title + '&y=' + year + '&type=movie&tomatoes=true')
					.then(function(response){
						return response.data;
					});
	};

	return{
		getMediaInfo: getMediaInfo,
		getMovieInfo: getMovieInfo
	};
}

app.factory('omdbapi', omdbapi);
