class TripsController < ApplicationController
    def index
        trips = Trip.all
        render json: trips.to_json(:include => :locations)
    end

    def create
        @tripnew = Trip.new(trip_params)
        if @tripnew.save
            render json: @tripnew
        end
    end

    def trip_params
		# permit the the params to be inserted in the database.  locations_attribute: [] is require  for nested attributes.
        params.require(:trip).permit(:user_id,:name, locations_attributes: [:id, :location,:start_date,:end_date, :details])
    end

    def destroy
        Trip.destroy(params[:id])
        render json:Trip.all
    end

    def update
		@tripupdate = Trip.find(params[:id])
		@tripupdate.update(trip_params)
		if @tripupdate.valid?
			render json: @tripupdate
		end
    end

	def email
		# get the id and _json parameter passed in the API call.
		# send the @trip details and call the new_trip_email method defined in javascript/mailer/trip_mailer.
		# deliver_now is necessary for instant delivery.
		@trip = Trip.find(params[:id])
		emailid = params[:_json]
		TripMailer.with(trip: @trip).new_trip_email(emailid).deliver_now
	end
end
