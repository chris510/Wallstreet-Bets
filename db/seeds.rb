# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do 

  User.destroy_all
  Stock.destroy_all
  Watch.destroy_all

  demo_user = User.create({ username: 'Demo_User', password: 'password123'})

  facebook = Stock.create({name: "Facebook", symbol: "FB"})
  netflix = Stock.create({name: "Netflix", symbol: "NFLX"})
  square = Stock.create({name: "Square", symbol: "SQ"})
  guardant_health = Stock.create({name: "Guardant Health", symbol: "GH"})
  tesla = Stock.create({name: "Tesla", symbol: "TSLA"})
  # amazon = Stock.create({name: "Amazon", symbol: "AMZN"})
  # shopify = Stock.cretate({name: "Shopify", symbol: "SHOP"})
  # google = Stock.create({name: "Google", symbol: "GOOG"})
  zoom = Stock.create({name: "Zoom", symbol: "ZM"})
  starbucks = Stock.create({name: "Starbucks", symbol: "SBUX"})
  microsoft = Stock.create({name: "Microsoft", symbol: "MSFT"})

  buy_fb = Order.create({
    user_id: demo_user.id, 
    stock_id: facebook.id,
    price: 190.42,
    shares: 82,
    order_type: "BUY"
  })
  buy_nflx = Order.create({
    user_id: demo_user.id, 
    stock_id: netflix.id,
    price: 289.57,
    shares: 17,
    order_type: "BUY"
  })
  buy_sq = Order.create({
    user_id: demo_user.id, 
    stock_id: square.id,
    price: 64.41,
    shares: 22,
    order_type: "BUY"
  })
  buy_guardant_health = Order.create({
    user_id: demo_user.id, 
    stock_id: guardant_health.id,
    price: 64.20,
    shares: 41,
    order_type: "BUY"
  })
  buy_tsla = Order.create({
    user_id: demo_user.id, 
    stock_id: tesla.id,
    price: 335.54,
    shares: 16,
    order_type: "buy"
  })

  watch_zm = Watch.create({
    user_id: demo_user.id,
    symbol: zoom.symbol
  })

  watch_sbux = Watch.create({
    user_id: demo_user.id,
    symbol: starbucks.symbol
  })

  watch_msft = Watch.create({
    user_id: demo_user.id,
    symbol: microsoft.symbol
  })

  demo_user.create_initial_portfolio
end