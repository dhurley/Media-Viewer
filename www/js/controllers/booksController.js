var booksController = function($scope, $ionicLoading, googleBooksApi) {
  $scope.books = [];

  var success = function(data){
    $ionicLoading.hide();
    $scope.books = data;
  };

  var failure = function(reason){
    $ionicLoading.hide();
    console.log("Error occured fetching music track data: " + reason);
  };

  $scope.search = function(keyword, type){
    $ionicLoading.show({
        template: '<ion-spinner icon="spiral"/>'
    })

    googleBooksApi.getBooks(keyword).then(success, failure);
  };

  $scope.launchGoogleBooks = function(url){
    window.open(url, '_system');
  }
};

app.controller('booksController', booksController);
