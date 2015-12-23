var episodesController = function($scope, $ionicHistory, $state, sharedData) {
  $scope.tvShow = sharedData.getCurrentData();

  var episodes = $scope.tvShow._embedded.episodes;
  var seasonNumber = 0;

  $scope.seasons = [];
  for(i = 0; i < episodes.length; i++){
    if(episodes[i].season != seasonNumber){
      seasonNumber++;
      $scope.seasons.push({number: seasonNumber, episodes:[]});
    }

    $scope.seasons[seasonNumber - 1].episodes.push(episodes[i]);
  }

  $scope.toggleSeason = function(season) {
    if ($scope.isSeasonShown(season)) {
      $scope.shownSeason = null;
    } else {
      $scope.shownSeason = season;
    }
  };

  $scope.isSeasonShown = function(season) {
    return $scope.shownSeason === season;
  };

  $scope.viewEpisode = function(episode) {
      sharedData.setCurrentData(episode);
      $state.go('episode');
  };

  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
};

app.controller('episodesController', episodesController);
