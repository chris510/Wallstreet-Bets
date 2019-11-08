class Order < ApplicationRecord
  validates :user_id, presence: true
  validates :stock_id, presence: true
  validates :price, presence: true
  validates :shares, presence: true
  validates :order_type, presence: true, inclusion: { in: ['buy', 'sell'] }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :stock,
    foreign_key: :stock_id,
    class_name: :Stock
end
