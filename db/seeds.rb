# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative 'portfolios'
require 'csv'

ActiveRecord::Base.transaction do 

  User.destroy_all
  Stock.destroy_all
  Watch.destroy_all
  Order.destroy_all
  Portfolio.destroy_all

  demo_user = User.create({ username: 'Demo_User', password: 'password123'})

  # facebook = Stock.create({name: "Facebook", symbol: "FB"})
  # netflix = Stock.create({name: "Netflix", symbol: "NFLX"})
  # square = Stock.create({name: "Square", symbol: "SQ"})
  # guardant_health = Stock.create({name: "Guardant Health", symbol: "GH"})
  # tesla = Stock.create({name: "Tesla", symbol: "TSLA"})
  # amazon = Stock.create({name: "Amazon", symbol: "AMZN"})
  # shopify = Stock.cretate({name: "Shopify", symbol: "SHOP"})
  # google = Stock.create({name: "Google", symbol: "GOOG"})
  # zoom = Stock.create({name: "Zoom", symbol: "ZM"})
  # starbucks = Stock.create({name: "Starbucks", symbol: "SBUX"})
  # microsoft = Stock.create({name: "Microsoft", symbol: "MSFT"})

  nasdaq_csv = File.read(Rails.root.join('db', 'nasdaq.csv'))
  nasdaq = CSV.parse(nasdaq_csv, :headers => true, :encoding => 'ISO-8859-1')
  nasdaq.each do |row|
    Stock.create(symbol: row["Symbol"], name: row["Company Name"])
  end

  buy_fb = Order.create({
    user_id: demo_user.id, 
    symbol: 'FB',
    price: 190.42,
    shares: 63,
    order_type: "BUY"
  })
  buy_nflx = Order.create({
    user_id: demo_user.id, 
    symbol: 'NFLX',
    price: 289.57,
    shares: 48,
    order_type: "BUY"
  })
  buy_sq = Order.create({
    user_id: demo_user.id, 
    symbol: 'SQ',
    price: 64.41,
    shares: 80,
    order_type: "BUY"
  })
  buy_gh = Order.create({
    user_id: demo_user.id, 
    symbol: 'GH',
    price: 64.20,
    shares: 82,
    order_type: "BUY"
  })
  buy_tsla = Order.create({
    user_id: demo_user.id, 
    symbol: 'TSLA',
    price: 335.54,
    shares: 39,
    order_type: "BUY"
  })

  watch_zm = Watch.create({
    user_id: demo_user.id,
    symbol: 'ZM'
  })

  watch_sbux = Watch.create({
    user_id: demo_user.id,
    symbol: 'SBUX'
  })

  watch_msft = Watch.create({
    user_id: demo_user.id,
    symbol: 'MSFT'
  })

   PORTFOLIOS.each do |day|
    date = Date.parse(day[:time])
    balance = day[:balance]
    Portfolio.create({ date: date, balance: balance, user_id: demo_user.id })
  end

end