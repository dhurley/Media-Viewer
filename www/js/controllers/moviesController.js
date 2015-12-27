var moviesController = function($scope, $ionicLoading, $state, $ionicHistory, sharedData, omdbApi) {
  $scope.movies = [];

  $scope.search = function(keyword){
    $ionicLoading.show({
        template: '<ion-spinner icon="spiral"/>'
    })

    omdbApi.getMovies(keyword + '*').then(
      function(data){
        $ionicLoading.hide();
        $scope.movies = data;
      }, function(reason){
        $ionicLoading.hide();
        console.log("Error occured fetching movie data: " + reason);
      }
    );
  };

  $scope.viewDetails = function(movie){
    sharedData.setCurrentData(movie);
    $state.go('movieDetails');
  };

  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
};

app.controller('moviesController', moviesController);
