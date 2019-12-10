// const AV_API_KEY = M04MNL3GXYJUL5X8
// const IEX_API_KEY = "pk_6b6b3dd7b1c14762aa91fccb20c382aa"
const IEX_API_KEY = "pk_38d5e78ff7ef49a9b0eda63eae7b7950"

export const fetchPayload = () => (
  $.ajax({
    method: 'GET',
    url: '/api/stocks'
  })
);

export const fetchStockPrice = (symbol) => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/market/batch?types=quote&token=${IEX_API_KEY}&symbols=${symbol}`
  })
)

export const fetchStock = symbol => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/company/?token=${IEX_API_KEY}`
  })
);

export const fetchStockIntradayData = symbol => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/batch?&types=quote,chart&range=1D&chartInterval=5&token=${IEX_API_KEY}`
  })
);

export const fetch1YrHistoricalData = symbol => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/batch?&types=chart&range=1Y&token=${IEX_API_KEY}`
  })
);

export const fetch5yrHistoricalData = symbol => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/batch?&types=chart&range=5Y&token=${IEX_API_KEY}`
  })
)

export const fetchStockInfo = symbol => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/company?token=${IEX_API_KEY}`
  })
);

export const fetchStockNews = symbol => (
  $.ajax({
    method: 'GET',
    url: `https://newsapi.org/v2/everything?q=${symbol}&apiKey=${window.newsAPIKey}`
  })
);
