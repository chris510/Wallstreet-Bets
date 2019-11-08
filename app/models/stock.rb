class Stock < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :symbol, presence: true, uniqueness: true

  has_many :orders,
    foreign_key: :stock_id,
    class_name: :Order

  has_many :users,
    through: :orders,
    source: :user
end
