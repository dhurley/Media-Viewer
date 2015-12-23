var episodeController = function($scope, $ionicHistory, $state, sharedData) {
  $scope.episode = sharedData.getCurrentData();

  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
};

app.controller('episodeController', episodeController);
