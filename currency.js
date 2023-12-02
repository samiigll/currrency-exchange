class Currency {
  constructor() {
    
    this.url = "https://api.freecurrencyapi.com/v1/latest?apikey="+ "your api key " + "&base_currency="
  }

  async exchange(amount, firstCurrency, secondCurrency) {
    try {
      const url = `${this.url}${firstCurrency}`;
      const response = await fetch(url);
      const result = await response.json();
      console.log(result); // Sonucu loglayın ve API'den ne aldığınızı görün
      const exchangeResult = amount * result.data[secondCurrency];
      return exchangeResult;
    } catch (error) {
      console.error(error); // Hataları loglayın
    }
  }
}