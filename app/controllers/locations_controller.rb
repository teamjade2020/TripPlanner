class LocationsController < ApplicationController
    def create
        Location.create(location_params)
    end
    def location_params
        params.require(:locations).permit(:trip_id,:location,:start_date, :end_date,:details)
    end
end
