@orders.each do |order|
  json.set! order.id do
      json.partial! 'api/order/orders', order: order
  end
end

