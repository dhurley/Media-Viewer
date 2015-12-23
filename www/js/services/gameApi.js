var gameApi = function($ionicPlatform, $http){

	var steamAppIds;

	$ionicPlatform.ready(function() {
		$http.get('http://api.steampowered.com/ISteamApps/GetAppList/v2/')
					.then(function(response){
						steamAppIds = response.data.applist.apps;
					});
	});

	var getGames = function(keyword){
		return $http.get('https://api.hitbox.tv/games?q=' + keyword)
					.then(function(response){
						return response.data.categories;
					});
	};

	var getGameDetails = function(name){
		var appId = getSteammAppId(name);
		return $http.get('http://store.steampowered.com/api/appdetails?appids=' + appId)
					.then(function(response){
						return response.data[appId].data;
					}, function(response){
						return {errorInformation: 'No further Information Available.'}
					});
	};

	var getSteammAppId = function(name){
		for(i = 0; i < steamAppIds.length; i++){
			if(steamAppIds[i].name == name){
				return steamAppIds[i].appid;
			}
		}
	}

	return{
		getGames: getGames,
		getGameDetails: getGameDetails
	};
}

app.factory('gameApi', gameApi);
