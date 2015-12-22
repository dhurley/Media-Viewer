var moviesController = function($scope, $ionicLoading, $state, $ionicHistory, sharedData, omdbapi) {
  $scope.movies = [];

  $scope.search = function(keyword){
    $ionicLoading.show({
        template: '<ion-spinner icon="spiral"/>'
    })

    omdbapi.getMovies(keyword + '*')
      .then(function(data){
              $ionicLoading.hide();
              $scope.movies = data.Search;
            }, function(reason){
              $ionicLoading.hide();
              console.log("Error occured fetching movie data: " + reason);
            }
      );
  };

  $scope.viewDetails = function(movie){
    sharedData.setCurrentMovie(movie);
    $state.go('movieDetails');
  };

  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
};

app.controller('moviesController', moviesController);
