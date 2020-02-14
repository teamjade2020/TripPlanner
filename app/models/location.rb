class Location < ApplicationRecord
    validates_presence_of :location, :start_date, :end_date
    belongs_to :trip
end
