export const fetchWatchedStocks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/watches'
  })
);

export const fetchWatchedStock = watchId => (
  $.ajax({
    method: 'GET',
    url: `/api/watches/${watchId}`
  })
);

export const createWatchedStock = watch => (
  $.ajax({
    method: 'POST',
    url: '/api/watches',
    data: { watch }
  })
);

// export const removeWatchedStock = watchId => (

// )