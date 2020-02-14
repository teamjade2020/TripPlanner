# Preview all emails at http://localhost:3000/rails/mailers/trip_mailer
class TripMailerPreview < ActionMailer::Preview
	def new_trip_email
    # Set up a temporary order for the preview
	    trip = Trip.new(name: "trip")

	    TripMailer.with(trip: trip).new_trip_email
	end
end
