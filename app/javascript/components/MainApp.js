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
import Topbar from './Topbar'
import Top from './Top'

class MainApp extends React.Component {
	constructor(props){
		super(props)
		this.state={
			trips:[ ]
		}
		this.getTrips()
	}

	componentDidMount(){
		// this.getTrips()
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





  render () {
	  const todayDate = new Date().toISOString().slice(0,10)
      const {
      signed_in,
      sign_in_route,
      sign_out_route,
	  current_user
    } = this.props


    return (
    <Router>
          <React.Fragment>

      		{/*nav bar*/}
		  {/* <Topbar signed_in={signed_in} sign_in_route= {sign_in_route} sign_out_route={sign_out_route} /> */}
		  <Top signed_in={signed_in} sign_in_route={sign_in_route} sign_out_route={sign_out_route} />

          <Switch>

		   <Route exact path="/trips/:id" render={(props) => <TripInfo {...props} onDelete={this.deleteTrip} trips={ this.state.trips } current_date ={ todayDate } /> } />

		  <Route exact path="/trips" render={(props) => <Dashboard trips={ this.state.trips } current_user={ current_user } current_date ={ todayDate } /> } />

		  <Route exact path="/pasttrips" render={(props) => <PastTrips trips={ this.state.trips } current_user={ current_user } current_date ={ todayDate } /> } />

		  <Route exact path="/newtrip" render={(props) => <NewTrip onSubmit={ this.createTrip } current_user={ current_user } current_date ={ todayDate }  /> } />

		  <Route exact path="/newtriplocations" render={(props) => <NewTripLocations current_user={ current_user } current_date ={ todayDate }  /> } />


          </Switch>

	  	</React.Fragment>
	   </Router>
    );
  }
}

export default MainApp
