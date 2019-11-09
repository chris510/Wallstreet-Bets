// import { AV_API_KEY } from 'react-native-dotenv';
// const AV_API_KEY = M04MNL3GXYJUL5X8
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
