var spotifyApi = function($http){
	var getTracks = function(keyword){
		return $http.get('https://api.spotify.com/v1/search?type=track&limit=50&q=track:' + keyword + '*').then(
			function(response){
				if(response.data.tracks.items.length == 0){
					return {errorInformation: 'No Tracks Found.'}
				}
				return response.data.tracks.items;
			}, function(response){
				return {errorInformation: 'No Tracks Found.'}
			}
		);
	};

  var getArtists = function(keyword){
		return $http.get('https://api.spotify.com/v1/search?type=artist&limit=50&q=artist:' + keyword + '*').then(
			function(response){
				if(response.data.artists.items.length == 0){
					return {errorInformation: 'No Artists Found.'}
				}
				return response.data.artists.items;
			}, function(response){
				return {errorInformation: 'No Artists Found.'}
			}
		);
	};

  var getAlbums = function(keyword){
		return $http.get('https://api.spotify.com/v1/search?type=album&limit=50&q=album:' + keyword + '*').then(
			function(response){
				if(response.data.albums.items.length == 0){
					return {errorInformation: 'No Albums Found.'}
				}
				return response.data.albums.items;
			}, function(response){
				return {errorInformation: 'No Albums Found.'}
			}
		);
	};

	return{
		getTracks: getTracks,
		getArtists: getArtists,
    getAlbums: getAlbums
	};
}

app.factory('spotifyApi', spotifyApi);
