class Location < ApplicationRecord
    validates_presense_of :location, :start_date, :end_date
    belongs_to :trip
end
