var tvMazeApi = function($http){
	var getTvShows = function(keyword){
		return $http.get('http://api.tvmaze.com/search/shows?q=' + keyword).then(
			function(response){
				if(response.data.length == 0){
					return {errorInformation: 'No TV Shows Found.'}
				}
				return response.data;
			}, function(response){
				return {errorInformation: 'No TV Shows Found.'}
			}
		);
	};

	var getTvDetails = function(name){
		return $http.get('http://api.tvmaze.com/singlesearch/shows?q=' + name + '&embed=episodes').then(
			function(response){
				return response.data;
			}, function(response){
				return {errorInformation: 'No further Information Available.'}
			}
		);
	};

	return{
		getTvShows: getTvShows,
		getTvDetails: getTvDetails
	};
}

app.factory('tvMazeApi', tvMazeApi);
