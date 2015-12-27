var musicController = function($scope, $ionicLoading, spotifyApi) {
  $scope.musicType = 'Track';
  $scope.data = [];

  var success = function(data){
    $ionicLoading.hide();
    $scope.data = data;
  };

  var failure = function(reason){
    $ionicLoading.hide();
    console.log("Error occured fetching music track data: " + reason);
  };

  $scope.search = function(keyword, musicType){
    $ionicLoading.show({
        template: '<ion-spinner icon="spiral"/>'
    })

    if(musicType == 'Track'){
      spotifyApi.getTracks(keyword).then(success, failure);
    }else if(musicType == 'Artist'){
      spotifyApi.getArtists(keyword).then(success, failure);
    }else if(musicType == 'Album'){
      spotifyApi.getAlbums(keyword).then(success, failure);
    }
  };

  $scope.launchSpotify = function(url){
    window.open(url, '_system');
  };

  $scope.lauchYoutube = function(name){
    var url = 'http://www.youtube.com/results?search_query=' + name;
    window.open(url, '_system');
  };

  $scope.launchGooglePlayStore = function(name){
    var url = 'https://play.google.com/store/search?c=music&q=' + name;
    window.open(url, '_system');
  }
};

app.controller('musicController', musicController);
