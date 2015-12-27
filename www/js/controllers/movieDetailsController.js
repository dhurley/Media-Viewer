var movieDetailsController = function($scope, $ionicHistory, $ionicLoading, sharedData, omdbApi) {
  $ionicLoading.show({
      template: '<ion-spinner icon="spiral"/>'
  })

  $scope.hideContent = true;
  $scope.movie = sharedData.getCurrentData();

  omdbApi.getMovieDetails($scope.movie.Title, $scope.movie.Year).then(
    function(data){
      $ionicLoading.hide();
      $scope.hideContent = false;
      $scope.movie = data;
    }, function(reason){
      $ionicLoading.hide();
      console.log("Error occured fetching movie data: " + reason);
    }
  );

  $scope.lauchYoutube = function(title, year){
    var url = 'http://www.youtube.com/results?search_query=trailer+';
    var splitTitle = title.split(" ");
    for(i = 0; i < splitTitle.length; i++){
      url = url + splitTitle[i] + '+';
    }
    url = url + year;

    window.open(url, '_system');
  };

  $scope.launchGooglePlayStore = function(title, year){
    var url = 'https://play.google.com/store/search?q=';
    var splitTitle = title.split(" ");
    for(i = 0; i < splitTitle.length; i++){
      url = url + splitTitle[i] + '%20';
    }
    url = url + year + '&c=movies';

    window.open(url, '_system');
  };

  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
};

app.controller('movieDetailsController', movieDetailsController);
