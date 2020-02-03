class TripsController < ApplicationController
    def index
        trips = Trip.all
        render json:trips.to_json(:include => :locations)
    end

    def show
    end

end
