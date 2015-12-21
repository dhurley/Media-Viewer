var sharedData = function(){
	var currentFilePath;

	var setCurrentFilePath = function(data){
		currentFilePath = data;
	};

	var getCurrentFilePath = function(){
		return currentFilePath;
	};

	return{
		setCurrentFilePath: setCurrentFilePath,
    getCurrentFilePath: getCurrentFilePath
	};
}

app.factory('sharedData', sharedData);
