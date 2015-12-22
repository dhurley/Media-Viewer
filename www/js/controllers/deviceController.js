var deviceController = function($scope, $ionicPlatform, $window, $state, fileFactory, sharedData) {
  var file = new fileFactory();

  $ionicPlatform.ready(function() {
    $scope.getContents(cordova.file.externalRootDirectory, true);
  });

  $scope.getContents = function(path, isDirectory) {
    if(isDirectory){
      file.getEntries(path).then(function(result) {
        $scope.files = result;
        if(path != cordova.file.externalRootDirectory){
          $scope.files.unshift({name: '[parent]'});
          file.getParentDirectory(path).then(function(result) {
            result.name = '[parent]';
            $scope.files[0] = result;
          });
        }
        $scope.files = addIsVideoFileAttribute($scope.files);
        $scope.files = removeUnknownFiles($scope.files);
      });
    }else{
      sharedData.setCurrentFilePath(path);
      $state.go('deviceMovieDetails');
    }
  };

  var addIsVideoFileAttribute = function(files){
    var regex = new RegExp('^.*\.(avi|AVI|wmv|WMV|flv|FLV|mpg|MPG|mp4|MP4|mkv|MKV)$');

    for(i = 0; i < files.length; i++){
      if(regex.test(files[i].name)){
        files[i].isVideoFile = true;
      }else{
        files[i].isVideoFile = false;
      }
    }

    return files;
  };

  var removeUnknownFiles = function(files){
    var filteredFiles = [];
    for(i = 0; i < files.length; i++){
      if(files[i].isDirectory || files[i].isVideoFile){
        filteredFiles.push(files[i]);
      }
    }

    return filteredFiles;
  };
};

app.controller('deviceController', deviceController);
