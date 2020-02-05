# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




trip_attributes =[
{
    name: 'New York Trip',
    user_id: 1
},
{
    name: 'California Trip',
    user_id: 2
},
{
    name: 'Washington Trip',
    user_id: 1
}
]

trip_attributes.each do |a|
    Trip.where(a).first_or_create
end

location_attributes = [
{
    trip_id: 1,
    location: 'New York City',
    start_date: '2020-02-03',
    end_date: '2020-02-10',
    details: 'Going to New York'
},
{
    trip_id: 2,
    location: 'San Jose',
    start_date: '2020-03-10',
    end_date: '2020-03-15',
    details: 'Going to San Jose'
},
{
    trip_id: 3,
    location: 'Seattle',
    start_date: '2020-01-03',
    end_date: '2020-01-10',
    details: 'Going to Seattle'
}
]

location_attributes.each do |a|
    Location.where(a).first_or_create
end
