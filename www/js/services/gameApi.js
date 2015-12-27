var gameApi = function($http){

	var getSteamApps = function(){
		return $http.get('http://api.steampowered.com/ISteamApps/GetAppList/v2/').then(
			function(response){
				return response.data.applist.apps;
			}
		);
	};

	var getGameDetails = function(appId){
		return $http.get('http://store.steampowered.com/api/appdetails?appids=' + appId).then(
			function(response){
				return response.data[appId].data;
			}
		);
	};

	return{
		getSteamApps: getSteamApps,
		getGameDetails: getGameDetails
	};
}

app.factory('gameApi', gameApi);
