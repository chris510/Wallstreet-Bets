class Watch < ApplicationRecord
  validates :user_id, :symbol, presence: true

  belongs_to :user
end
