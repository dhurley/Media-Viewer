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
						if(response.data.categories.length == 0){
							return {errorInformation: 'No Games Found.'}
						}

						var data = response.data.categories;
						var games = [];
						for(var j = 0; j < data.length; j++){
							for(var i = 0; i < steamAppIds.length; i++){
								if(steamAppIds[i].name == data[j].category_name){
									data[j].steamAppId = steamAppIds[i].appid;
									games.push(data[j]);
									break;
								}
							}
						}

						return games;
					}, function(response){
						return {errorInformation: 'No Games Found.'}
					});
	};

	var getGameDetails = function(appId){
		return $http.get('http://store.steampowered.com/api/appdetails?appids=' + appId)
					.then(function(response){
						return response.data[appId].data;
					}, function(response){
						return {errorInformation: 'No Further Information Available.'}
					});
	};

	return{
		getGames: getGames,
		getGameDetails: getGameDetails
	};
}

app.factory('gameApi', gameApi);
