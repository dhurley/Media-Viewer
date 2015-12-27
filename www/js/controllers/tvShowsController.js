var tvShowsController = function($scope, $ionicLoading, $state, $ionicHistory, sharedData, tvMazeApi) {
  $scope.tvShows = [];

  $scope.search = function(keyword){
    $ionicLoading.show({
        template: '<ion-spinner icon="spiral"/>'
    })

    tvMazeApi.getTvShows(keyword).then(
      function(data){
        $ionicLoading.hide();
        $scope.tvShows = data;
      }, function(reason){
        $ionicLoading.hide();
        console.log("Error occured fetching movie data: " + reason);
      }
    );
  };

  $scope.viewDetails = function(tvShow){
    sharedData.setCurrentData(tvShow);
    $state.go('tvShowDetails');
  };

  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
};

app.controller('tvShowsController', tvShowsController);
