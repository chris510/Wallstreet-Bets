class Order < ApplicationRecord
  validates :user_id, presence: true
  # validates :stock_id, presence: true
  validates :symbol, presence: true
  validates :price, presence: true
  validates :shares, presence: true
  validates :order_type, presence: true, inclusion: { in: ['BUY', 'SELL'] }

  belongs_to :user

  belongs_to :stock,
    primary_key: :symbol,
    foreign_key: :symbol,
    class_name: 'Stock'
end