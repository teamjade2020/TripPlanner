import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Navbar, NavItem } from 'reactstrap'

//pages
import Dashboard from "./pages/Dashboard"
import PastTrips from "./pages/PastTrips"
import TripInfo from "./pages/TripInfo"
import NewTrip from "./pages/NewTrip"
import NewTripLocations from './pages/NewTripLocations'
import Top from './Top'
import EditTrip from './pages/EditTrip'
import EditTripLocation from './pages/EditTripLocation'
import Tutorial from './Tutorial'

class MainApp extends React.Component {
	constructor(props){
		super(props)
		this.state={
			trips:[ ]
		}
		this.getTrips()
	}

	// gets trips from trips database in backend
	getTrips = () =>{
		fetch("/trips")
		.then((response)=>{
			if(response.status === 200){
				return(response.json())
			}
		})
		.then((tripsArray)=>{
			this.setState({trips: tripsArray})
		})
	}

	//this creates trip and puts it in the database
	createTrip = (trip) =>{
		fetch('/trips', {
			body: JSON.stringify(trip),
			headers:{
				'Content-Type': 'application/json'
			},
			method: "POST"
		})
		.then((response) => {
			if(response.ok){
				return this.getTrips()
			}
		})
	}


	//delete funtionality
	deleteTrip = (id)=> {
		return fetch(`/trips/${id}` ,{
			method: 'DELETE'
		})
		.then((response)=> {
			if(response.ok){
				return this.getTrips()
			}
		})
	}


	editTrip = (form)=> {
		let trip = {
			user_id: this.props.current_user.id ,
			name: form.name,
			locations_attributes: form.locations
		}
		return fetch (`/trips/${form.id}`, {
			body: JSON.stringify(trip),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'PUT'
		})
		.then ((response)=> {
			if (response.ok){
				return this.getTrips()
			}
		})
	}

	render () {
		const todayDate = new Date().toISOString().slice(0,10)
		const {
			signed_in,
			sign_in_route,
			sign_out_route,
			current_user,
			new_user_registration_path
		} = this.props


		return (
			<Router>
				<React.Fragment>

				{/*nav bar*/}
				<Top signed_in={signed_in} sign_in_route={sign_in_route} sign_out_route={sign_out_route} new_user_registration_path={new_user_registration_path}/>

					<Switch>
						<Route exact path="/" render={(props) => <Tutorial signed_in={signed_in} sign_in_route={sign_in_route} sign_out_route={sign_out_route} new_user_registration_path={new_user_registration_path}/> } />

						<Route exact path="/tripinfo/:id" render={(props) => <TripInfo {...props} onDelete={this.deleteTrip} trips={ this.state.trips } current_date ={ todayDate } /> } />

						<Route exact path="/trips" render={(props) => <Dashboard trips={ this.state.trips } current_user={ current_user } current_date ={ todayDate } /> } />

						<Route exact path="/pasttrips" render={(props) => <PastTrips trips={ this.state.trips } current_user={ current_user } current_date ={ todayDate } /> } />

						//route for new trips
						<Route exact path="/newtrip" render={(props) => <NewTrip onSubmit={ this.createTrip } current_user={ current_user } current_date ={ todayDate }  /> } />

						//route  for edit trip
						<Route exact path="/edit/:id" render={(props) => <EditTrip {...props} onEdit={ this.editTrip } current_user={ current_user } current_date ={ todayDate } trips={this.state.trips} /> } />
					</Switch>

				</React.Fragment>
			</Router>
		);
	}
}

export default MainApp
