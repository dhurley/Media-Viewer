var fileFactory = function($q, $window){
  var File = function(){};

  File.prototype = {
    getParentDirectory: function(path) {
      var deferred = $q.defer();

      $window.resolveLocalFileSystemURL(path, function(fileSystem) {
        fileSystem.getParent(function(result) {
          deferred.resolve(result);
        }, function(error) {
          deferred.reject(error);
        });

      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    },

    getEntries: function(path) {
      var deferred = $q.defer();

      $window.resolveLocalFileSystemURL(path, function(fileSystem) {
        var directoryReader = fileSystem.createReader();

        directoryReader.readEntries(function(entries) {
            deferred.resolve(entries);
          }, function(error) {
            deferred.reject(error);
          });

      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }
  };

  return File;
};

app.factory('fileFactory', fileFactory);
