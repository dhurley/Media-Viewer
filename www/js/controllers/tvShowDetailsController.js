var tvShowDetailsController = function($scope, $ionicHistory, $ionicLoading, $state, sharedData, tvMazeApi) {
  $ionicLoading.show({
      template: '<ion-spinner icon="spiral"/>'
  })

  $scope.hideContent = true;
  $scope.tvShow = sharedData.getCurrentData().show;

  tvMazeApi.getTvDetails($scope.tvShow.name)
    .then(function(data){
            $ionicLoading.hide();
            $scope.hideContent = false;
            $scope.tvShow = data;
          }, function(reason){
            $ionicLoading.hide();
            console.log("Error occured fetching TV show data: " + reason);
          }
    );

    $scope.viewEpisodes = function(tvShow){
      sharedData.setCurrentData(tvShow);
      $state.go('episodes');
    };

    $scope.goBack = function(){
      $ionicHistory.goBack();
    }
};

app.controller('tvShowDetailsController', tvShowDetailsController);
