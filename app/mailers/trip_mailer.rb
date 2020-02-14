class TripMailer < ApplicationMailer
	def new_trip_email(emailid)
		@trip = params[:trip]
		p @emailid
		mail(to: emailid, subject: "You have new trip")
	end
end
