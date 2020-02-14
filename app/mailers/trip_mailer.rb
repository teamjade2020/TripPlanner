class TripMailer < ApplicationMailer
	def new_trip_email(emailid)
		@trip = params[:trip]
		@location = @trip.locations[0]
		mail(to: emailid, subject: "You have new trip")
	end
end
