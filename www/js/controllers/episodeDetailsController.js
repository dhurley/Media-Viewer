var episodeDetailsController = function($scope, $ionicHistory, sharedData) {
  $scope.episode = sharedData.getCurrentData();

  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
};

app.controller('episodeDetailsController', episodeDetailsController);
