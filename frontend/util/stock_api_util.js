// const AV_API_KEY = M04MNL3GXYJUL5X8
export const fetchPayload = () => (
  $.ajax({
    method: 'GET',
    url: '/api/stocks'
  })
);

export const fetchStock = symbol => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/company/?token=${window.iexAPIKey}`
  })
);

export const fetchStockIntradayData = symbol => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/batch?&types=quote,chart&range=1D&chartInterval=5&token=${window.iexAPIKey}`
  })
);

export const fetch1YrHistoricalData = symbol => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/batch?&types=chart&range=1Y&token=${window.iexAPIKey}`
  })
);

export const fetch5yrHistoricalData = symbol => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/batch?&types=chart&range=5Y&token=${window.iexAPIKey}`
  })
)

export const fetchStockInfo = symbol => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/company?token=${window.iexAPIKey}`
  })
);

export const fetchStockNews = symbol => (
  $.ajax({
    method: 'GET',
    url: `https://newsapi.org/v2/everything?q=${symbol}&apiKey=${window.newsAPIKey}`
  })
);
