class TripsController < ApplicationController
    def index
        trips = Trip.all
        render json: trips.to_json(:include => :locations)
    end

    # def show
    # end
    #
    def create
    #
        tripnew = Trip.new(trip_params)
        if tripnew.save
            render json: tripnew
        end

    end

    def trip_params
        params.require(:trip).permit(:user_id,:name, locations_attributes: [:id, :location,:start_date,:end_date, :details])
    end

    def destroy
        # Trip.destroy(params[:id])
        # render json:Trip.all
    end

    def update
    end
end
