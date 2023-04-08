class DataSource {
  static searchCocktail(keyword) {
    return fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=772f6bc6`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.Search) {
          return Promise.resolve(responseJson.Search);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}
export default DataSource;
