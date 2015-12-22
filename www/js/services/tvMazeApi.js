var tvMazeApi = function($http){
	var getTvShows = function(keyword){
		return $http.get('http://api.tvmaze.com/search/shows?q=' + keyword)
					.then(function(response){
						return response.data;
					});
	};

	var getTvDetails = function(name){
		return $http.get('http://api.tvmaze.com/singlesearch/shows?q=' + name + '&embed=episodes')
					.then(function(response){
						return response.data;
					});
	};

	return{
		getTvShows: getTvShows,
		getTvDetails: getTvDetails
	};
}

app.factory('tvMazeApi', tvMazeApi);
