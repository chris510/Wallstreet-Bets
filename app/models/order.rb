class Order < ApplicationRecord
  validates :user_id, presence: true
  validates :stock_id, presence: true
  validates :price, presence: true
  validates :shares, presence: true
  validates :order_type, presence: true, inclusion: { in: ['buy', 'sell'] }

  belongs_to :user
  belongs_to :stock
end
