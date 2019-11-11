export const fetchWatchedStocks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/watches'
  })
);

export const fetchWatchIntradayData = symbol => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/batch?&types=quote,chart&range=1D&chartInterval=5&token=${window.iexAPIKey}`
  })
)

// export const fetchWatchedStock = watchId => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/watches/${watchId}`
//   })
// );

// export const createWatchedStock = watch => (
//   $.ajax({
//     method: 'POST',
//     url: '/api/watches',
//     data: { watch }
//   })
// );

// export const removeWatchedStock = watchId => (

// )