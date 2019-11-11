class Watch < ApplicationRecord
  validates :user_id, :stock_id, presence: true

  belongs_to :user
end
