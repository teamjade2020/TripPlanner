require 'rails_helper'

describe "Trips API", type: :request do



  it "shows all trips" do
    Create a new trip in the Test Database (not the same one as development)
    User.create!(first_name: 'Washingtom', last_name: 'George', password: '123456', password_confirmation: '123456', email: 'pass@word.com')
    sign_in user
    user = User.create!(email: "user@example.org", password: "very-secret")
    Trip.create!(name: 'Washingtom', user_id: user.id)

    # Make a request to the API
    get '/trips.json'

    # Convert the response into a Ruby Hash
    json = JSON.parse(response.body)

    # Assure that we got a successful response
    expect(response).to have_http_status(:ok)

    # Assure that we got one result back as expected
    expect(json.length).to eq 1
  end

  it "can create a trip" do

      user = User.create!(email: "user@example.org", password: "very-secret")

      trip_params= {
        trip: {
        name: 'Swiss',
        user_id: user.id,
        locations: [{
            location: 'Swiss City',
            start_date: '2020-03-01',
            end_date: '2020-03-10',
            details: 'Will be cold'
        }]
        }
      }

      post '/trips' , params: trip_params
      expect(response).to have_http_status(:ok)

      new_trip = Trip.first
      expect(new_trip.name).to eq('Swiss')


  end

  it "can delete a trip" do
      user = User.create!(email: "user@example.org", password: "very-secret")
      Trip.create!(name: 'Washingtom', user_id: user.id)
      trip = Trip.first
      delete trip_path(trip)
      expect(response).to have_http_status(:ok)
  end

end
