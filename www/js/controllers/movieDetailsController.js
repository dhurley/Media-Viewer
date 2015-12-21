var movieDetailsController = function($scope, sharedData, omdbapi) {
  var replaceRegex = new RegExp('%20', 'g');
  var yearRegex = new RegExp('[0-9]{4}');
  var path = sharedData.getCurrentFilePath();

  var title = '';
  var year = '';
  var splitPath = path.split('/');
  var fileName = splitPath[splitPath.length - 1];
  var splitFileName = fileName.replace(replaceRegex, '.').split('.');

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

  omdbapi.getMovieInfo(title, year)
    .then(function(data){
            $scope.movie = data;
          }, function(reason){
            console.log("Error occured fetching movie data: " + reason);
          }
    );
};

app.controller('movieDetailsController', movieDetailsController);
