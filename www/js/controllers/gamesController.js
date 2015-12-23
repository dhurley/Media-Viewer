var gamesController = function($scope, $ionicLoading, $state, $ionicHistory, sharedData, gameApi) {
  $scope.games = [];

  $scope.search = function(keyword){
    $ionicLoading.show({
        template: '<ion-spinner icon="spiral"/>'
    })

    gameApi.getGames(keyword)
      .then(function(data){
              $ionicLoading.hide();
              $scope.games = data;
            }, function(reason){
              $ionicLoading.hide();
              console.log("Error occured fetching movie data: " + reason);
            }
      );
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
