var onlineController = function($scope, $ionicLoading, $ionicPopover, omdbapi) {
  var currentYear = new Date().getFullYear();

  $scope.years = [];
  $scope.mediaItems = [];

  for (var i = currentYear; i >= 1990; i--) {
      $scope.years.push(i);
  }

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('html/filterPopover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };

  $scope.closePopover = function() {
    $scope.popover.hide();
  };

  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });

  $scope.search = function(keyword){
    $ionicLoading.show({
        template: '<ion-spinner icon="spiral"/>'
    })

    omdbapi.getMediaInfo(keyword + '*')
      .then(function(data){
              $ionicLoading.hide();
              $scope.mediaItems = data.Search;
            }, function(reason){
              $ionicLoading.hide();
              console.log("Error occured fetching movie data: " + reason);
            }
      );
  }
};

app.controller('onlineController', onlineController);
