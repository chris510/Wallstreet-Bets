import { IEX_API_KEY , AV_API_KEY } from 'react-native-dotenv';


export const fetchPayload = () => (
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
