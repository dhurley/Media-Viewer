var fileController = function($scope, $ionicPlatform, $window, fileFactory, omdbapi) {
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
      getFileInfo(path);
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

  var getFileInfo = function(path){
    console.log('path= ' + path);
    var replaceRegex = new RegExp('%20', 'g');
    var yearRegex = new RegExp('[0-9]{4}');

    var title = '';
    var year = '';
    var splitPath = path.split('/');
    var fileName = splitPath[splitPath.length - 1];

    console.log('fileName= ' + fileName);
    fileName = fileName.replace(replaceRegex, ".");
    console.log('fileName= ' + fileName);

    var splitFileName = fileName.split('.');
    console.log(splitFileName);

    for(i = 0; i < splitFileName.length; i++){
      if(yearRegex.test(splitFileName[i])){
        year = splitFileName[i];
        break;
      }else{
        if(title == ''){
          title = splitFileName[i];
        }else{
          title = title + ' ' + splitFileName[i];
        }
      }
    }

    console.log('title= ' + title);
    console.log('year= ' + year);

    omdbapi.getMovieInfo(title, year)
      .then(function(data){
              $scope.file = data
            }, function(reason){
              console.log("Error occured fetching movie data: " + reason);
            }
      );

    console.log($scope.file.Title);
    console.log($scope.file.imdbRating);
  };
};

app.controller('fileController', fileController);
