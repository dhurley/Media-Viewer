var googleBooksApi = function($http){
	var getBooks = function(keyword){
		return $http.get('https://www.googleapis.com/books/v1/volumes?printType=books&maxResults=40&q=intitle:' + keyword).then(
			function(response){
				if(response.data.totalItems == 0 ){
					return {errorInformation: 'No Books Found.'}
				}
				return response.data.items;
			}, function(response){
				return {errorInformation: 'No Books Found.'}
			}
		);
	};

	return{
		getBooks: getBooks
	};
}

app.factory('googleBooksApi', googleBooksApi);
