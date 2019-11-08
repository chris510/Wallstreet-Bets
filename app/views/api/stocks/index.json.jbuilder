
@stocks.each do |stock|

  json.stock do
    json.set! stock.symbol do
      json.partial! 'api/stocks/stock', stock: stock
    end
  end
  
  json.order do   
    stock.orders.each do |order|
      json.set! order.id do 
        json.partial! 'api/orders/order', order: order
      end
    end
  end

end