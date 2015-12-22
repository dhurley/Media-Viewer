var sharedData = function(){
	var currentData;

	var setCurrentData = function(data){
		currentData = data;
	};

	var getCurrentData = function(){
		return currentData;
	};

	return{
		setCurrentData: setCurrentData,
		getCurrentData: getCurrentData
	};
}

app.factory('sharedData', sharedData);
