class LocationsController < ApplicationController
    def create
        Location.create(location_params)
    end

	def update
		# find the ID based on the param and update the params.
		@location = Location.find(params[:id])
		@location.update(location_params)
	end

    def location_params
        params.require(:locations).permit(:trip_id,:location,:start_date, :end_date,:details)
    end
end
