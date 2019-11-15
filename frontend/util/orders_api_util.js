export const createOrder = order => (
  $.ajax({
    method: 'POST',
    url: '/api/orders',
    order
  })
);

export const deleteOrder = order => (
  $.ajax({
    method: 'DELETE',
    url: `/api/orders/${order.id}`
  })
);