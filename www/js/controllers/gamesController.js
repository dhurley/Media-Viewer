var gamesController = function($scope, $ionicLoading, $state, $ionicHistory, $ionicPlatform, $q, sharedData, steamApi) {
  $scope.games = [];

  var steamApps;
  var steamAppsPromise;

  $ionicPlatform.ready(function() {
    steamAppsPromise = steamApi.getSteamApps().then(
      function(data){
        steamApps = data;
      }
    )
  });

  $scope.search = function(keyword){
    $ionicLoading.show({
        template: '<ion-spinner icon="spiral"/>'
    })

    var regex = new RegExp(keyword + '.*');
		var gamePromises = [];

		steamApps.forEach(function(steamApp){
			if(regex.test(steamApp.name)){
				var gamePromise =steamApi.getGameDetails(steamApp.appid).then(
					function(data){
						if(data != undefined && data.type == 'game'){
	            return data;
						}
          },
					function(reason){
            console.log("Error occured fetching game data: " + reason);
          }
		    );

        gamePromises.push(gamePromise);
			}
		});

    if(gamePromises.length == 0){
      $scope.games = {errorInformation: 'No Games Found.'};
      $ionicLoading.hide();
    }else{
      $q.all(gamePromises).then(function(gamesReturned){
        var games = [];

        gamesReturned.forEach(function(game){
          if(game != undefined){
            games.push(game);
          }
        });

        $scope.games = games;
        $ionicLoading.hide();
  		});
    }
  };

  $scope.viewDetails = function(game){
    sharedData.setCurrentData(game);
    $state.go('gameDetails');
  };

  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
};

app.controller('gamesController', gamesController);
