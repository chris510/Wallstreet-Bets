class Portfolio < ApplicationRecord
  validates :user_id, presence: true
  validates :date, presence: true
  validates :balance, presence: true

  belongs_to :user
end
