var gameDetailsController = function($scope, $ionicHistory, $ionicLoading, sharedData, gameApi) {
  $ionicLoading.show({
      template: '<ion-spinner icon="spiral"/>'
  })

  $scope.hideContent = true;
  $scope.game = sharedData.getCurrentData();

  gameApi.getGameDetails($scope.game.category_name)
    .then(function(data){
            $ionicLoading.hide();
            $scope.hideContent = false;
            $scope.game = data;
          }, function(reason){
            $ionicLoading.hide();
            console.log("Error occured fetching game data: " + reason);
          }
    );

    $scope.lauchYoutube = function(title){
      var url = 'http://www.youtube.com/results?search_query=trailer+';
      var splitTitle = title.split(" ");
      for(i = 0; i < splitTitle.length; i++){
        url = url + splitTitle[i] + '+';
      }

      window.open(url, '_system');
    };

    $scope.lauchTwitch = function(title){
      var url = 'http://www.twitch.tv/directory/game/' + title;
      window.open(url, '_system');
    };

    $scope.lauchSteam = function(appId){
      var url = 'http://store.steampowered.com/app/' + appId;
      window.open(url, '_system');
    };

    $scope.goBack = function(){
      $ionicHistory.goBack();
    }
};

app.controller('gameDetailsController', gameDetailsController);
