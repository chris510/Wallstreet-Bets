import { IEX_API_KEY , AV_API_KEY } from 'react-native-dotenv';


export const fetchStocks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/stocks'
  })
)

export const fetchStock = (symbol) => (
  $.ajax({
    method: 'GET',
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${AV_API_KEY}`
  })
)

const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=demo"

export const doAjax = () => {
  $.ajax({
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=${AV_API_KEY}`,
    // dataType: 'json',
    // contentType: "application/json",
    success: function (data) {
      console.log(data);
      // var symbol = data['Meta Data']['2. Symbol']
      // var lastRefreshed = data['Meta Data']['3. Last Refreshed']
      // var lastTradePriceOnly = data['Time Series (1min)'][lastRefreshed]['4. close']
      // var lastVolume = data['Time Series (1min)'][lastRefreshed]['5. volume']

      // $('#stockSymbol').html(symbol);
      // $('#stockAsk').html(lastTradePriceOnly);
      // $('#stockVolume').html(numberWithCommas(lastVolume));
      // $("#stockIndicator").hide();
    }
  });
}