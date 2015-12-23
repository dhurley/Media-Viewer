var omdbApi = function($http){
	var getMovies = function(keyword){
		return $http.get('http://www.omdbapi.com/?s=' + keyword + '&type=movie')
					.then(function(response){
						if(response.data.Error){
							return {errorInformation: 'No Movies Found.'}
						}
						return response.data.Search;
					}, function(response){
						return {errorInformation: 'No Movies Found.'}
					});
	};

	var getMovieDetails = function(title, year){
		return $http.get('http://www.omdbapi.com/?t=' + title + '&y=' + year + '&type=movie&tomatoes=true')
					.then(function(response){
						return response.data;
					}, function(response){
						return {errorInformation: 'No Further Information Available.'}
					});
	};

	return{
		getMovies: getMovies,
		getMovieDetails: getMovieDetails
	};
}

app.factory('omdbApi', omdbApi);
