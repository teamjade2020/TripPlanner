class TripsController < ApplicationController
    def index
        trips = Trip.all
        render json: trips.to_json(:include => :locations)
    end

    def show
    end

    def create
        trip = Trip.create(trip_params)
        render json: trip
    end

    def trip_params
        params.require(:trip).permit(:user_id,:name, [:locations])
    end

    def destroy
        Trip.destroy(params[:id])
        render json:Trip.all
    end

    def update
    end
end
