var omdbapi = function($http){
	var getMovieInfo = function(title, year){
		return $http.get('http://www.omdbapi.com/?t=' + title + '&y=' + year + '&type=movie')
					.then(function(response){
						return response.data;
					});
	};

	return{
		getMovieInfo: getMovieInfo
	};
}

app.factory('omdbapi', omdbapi);
