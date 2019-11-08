@stocks.each do |stock|
  json.set! stock.symbol do
    json.partial! 'api/stocks/stock', stock: stock
  end
end