const IEX_API_KEY = "pk_6b6b3dd7b1c14762aa91fccb20c382aa"

export const fetchWatchedStocks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/watches'
  })
);

export const fetchWatchIntradayData = symbol => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/batch?&types=quote,chart&range=1D&chartInterval=5&token=${IEX_API_KEY}`
  })
)

export const addToWatches = watch => (
  $.ajax({
    method: 'POST',
    url: '/api/watches',
    data: { watch }
  })
)

export const removeFromWatches = watchId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/watches/${watchId}`
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