class User < ApplicationRecord
  attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :orders
  has_many :watches
  has_many :portfolios

  has_many :stocks,
    through: :orders,
    source: :stock
  # Calculate Initial Portfolio Data

  # API_KEY = "pk_6b6b3dd7b1c14762aa91fccb20c382aa"
  # API_KEY = "pk_38d5e78ff7ef49a9b0eda63eae7b7950"
  API_KEY = "pk_72f3c67ee17b4f6b977894cc73819d0d"

  def shares_owned
    stocks = Hash.new(0)
    return [] if self.orders.empty?
    orders_with_stocks = self.orders.includes(:stock)

    orders_with_stocks.each do |order|
      current_stock = order.stock
      if order.order_type == 'BUY'
        stocks[current_stock.symbol] += order.shares
      elsif order.order_type == 'SELL'
        stocks[current_stock.symbol] -= order.shares
      end
    end
    stocks.select { |symbol, shares| shares > 0 }
  end

  def shares_owned_value
    stocks = shares_owned
    stocks.map { |stock| {symbol: stock[0], shares: stock[1] } }
          .sort_by { |stock| stock[:symbol]}

    url = "https://cloud.iexapis.com/stable/stock/market/batch?types=quote&token=#{API_KEY}&symbols="
    request = url + stocks.keys.join(',')
    response = JSON.parse(open(request).read)

    total_shares_value = 0

    if stocks.keys.length > 0
      response.keys.each do |symbol|
        latest_price = response[symbol]["quote"]["latestPrice"]
        share_price = stocks[symbol] * latest_price
        total_shares_value += share_price
      end
    end
    total_shares_value.round(2)
  end


  # def calculate_one_day_portfolio
  #   stocks = stocks_owned
  #   stocks.map { |stock| {symbol: stock[0], shares: stock[1] } }
  #         .sort_by { |stock| stock[:symbol]}

  #   url = "https://cloud.iexapis.com/stable/stock/market/batch?types=chart&range=1d&chartInterval=5&last=5&token=#{API_TOKEN}&symbols="

  #   if stocks.length > 1
  #     request = url + stocks.keys.join(',')
  #     response = Json.parse(open(request).read)

  #     response.keys.each do |symbol|

  #       response[symbol]["chart"].each_with_index do |day, idx|
          
  #       end

  #     end
  #   end
  # end


  # User Authentication

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def create_one_year_chart

  end
  

  # def filter_one_year_data 

  # end

  # def initial_portfolio_one_year

  # end

  def create_five_year_charts
    charts = []
    stocks = shares_owned
    stocks.map { |stock| {symbol: stock[0], shares: stock[1] } }
          .sort_by { |stock| stock[:symbol]}
    # url = "https://cloud.iexapis.com/stable/stock/fb/batch?types=chart&range=1W&last=10&token=#{API_KEY}"
    url = "https://cloud.iexapis.com/stable/stock/market/batch?types=chart&range=5Y&token=#{API_KEY}&symbols="
    request = url + stocks.keys.join(",")
    data = JSON.parse(open(request).read)
    # data = JSON.parse(open(url).read)

    orders.each do |order|
      charts.push(filter_five_year_stock_chart_data(data, order))
    end
    charts
  end

  def filter_five_year_stock_chart_data(data, order)
    filter = data[order.stock.symbol]["chart"].map do |day_data|
      order.shares * day_data["close"]
    end
    filter
  end

  # Create initial 5 year portfolio

  def create_initial_portfolio
    url = "https://cloud.iexapis.com/stable/stock/market/batch?types=chart&range=5Y&token=pk_72f3c67ee17b4f6b977894cc73819d0d&symbols=FB"
    response = JSON.parse(open(url).read)
    five_year_chart = response["FB"]["chart"]

    five_year_charts = create_five_year_charts
    five_year_chart = five_year_chart.each_with_index.map do |day_data, idx| 
      total_balance = 0
      five_year_charts.each do |chart| 
        chart.each do |price|
          total_balance += price
        end
        Portfolio.create({
          user_id: id, 
          date: day_data["date"],
          balance: total_balance
          })
      end
    end
    five_year_chart
  end

  #convert date to miliseconds then compare
  def check_date(date1, date2)
    Date.parse(date1.to_s) >= Date.parse(date2.to_s)
  end
end
