var sharedData = function(){
	var currentMovie;

	var setCurrentMovie = function(data){
		currentMovie = data;
	};

	var getCurrentMovie = function(){
		return currentMovie;
	};

	return{
		setCurrentMovie: setCurrentMovie,
		getCurrentMovie: getCurrentMovie
	};
}

app.factory('sharedData', sharedData);
