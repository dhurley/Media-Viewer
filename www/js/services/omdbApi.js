var omdbApi = function($http){
	var getMovies = function(keyword){
		return $http.get('http://www.omdbapi.com/?s=' + keyword + '&type=movie')
					.then(function(response){
						return response.data;
					});
	};

	var getMovieDetails = function(title, year){
		return $http.get('http://www.omdbapi.com/?t=' + title + '&y=' + year + '&type=movie&tomatoes=true')
					.then(function(response){
						return response.data;
					});
	};

	return{
		getMovies: getMovies,
		getMovieDetails: getMovieDetails
	};
}

app.factory('omdbApi', omdbApi);
