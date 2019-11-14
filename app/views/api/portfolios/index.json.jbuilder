@portfolios.each do |portfolio|
  json.set! portfolio.date do  
    json.partial! 'api/portfolios/portfolio', portfolio: portfolio
  end
end
