export const createOrder = order => (
  $.ajax({
    method: 'POST',
    url: '/api/orders',
    data: { order } 
  })
);

export const deleteOrder = order => (
  $.ajax({
    method: 'DELETE',
    url: `/api/orders/${order.id}`
  })
);

export const getUserStocks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/orders',
  })
)