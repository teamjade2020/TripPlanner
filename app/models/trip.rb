class Trip < ApplicationRecord
    belongs_to :user
    has_many :locations, :dependent => :destroy
    accepts_nested_attributes_for :locations
end
