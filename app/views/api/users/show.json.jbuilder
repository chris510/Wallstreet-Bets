# json.current_user.id do
#   json.stock do  
#     @stocks.each do |stock|
#       json.set! stock.symbol do 
#         json.partial! 'api/stocks/stock', stock: stock
#       end
#     end
#   end

#   json.order do  
#     @orders.each do |order|
#       json.set! order.stock.symbol do 
#         json.partial! 'api/orders/order', :order, order
#       end
#     end
#   end

#   json.watch do
#     @watches.each do |watch|
#       json.set! watch.symbol do 
#         json.partial! 'api/watches/watch', :watch, watch
#       end
#     end
#   end
# end


json.partial! 'api/users/user', user: @user