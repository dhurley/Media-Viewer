var sharedData = function(){
	var currentFilePath;
	var currentMovie;

	var setCurrentFilePath = function(data){
		currentFilePath = data;
	};

	var getCurrentFilePath = function(){
		return currentFilePath;
	};

	var setCurrentMovie = function(data){
		currentMovie = data;
	};

	var getCurrentMovie = function(){
		return currentMovie;
	};

	return{
		setCurrentFilePath: setCurrentFilePath,
    getCurrentFilePath: getCurrentFilePath,
		setCurrentMovie: setCurrentMovie,
		getCurrentMovie: getCurrentMovie
	};
}

app.factory('sharedData', sharedData);
