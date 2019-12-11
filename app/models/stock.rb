class Stock < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :symbol, presence: true, uniqueness: true

  has_many :orders,
    primary_key: :symbol,
    foreign_key: :symbol,
    class_name: 'Order'

  has_many :watches,
    primary_key: :symbol,
    foreign_key: :symbol,
    class_name: :Watch

  has_many :watchers,
    through: :watches,
    source: :user

  
end
