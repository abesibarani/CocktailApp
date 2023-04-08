class DataSource {
  static searchCocktail(keyword) {
    return fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?f=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.cocktails) {
          return Promise.resolve(responseJson.cocktails);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}
export default DataSource;
