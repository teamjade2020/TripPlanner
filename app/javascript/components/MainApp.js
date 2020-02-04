import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom'

//pages
import Dashboard from "./pages/Dashboard"

class MainApp extends React.Component {
	constructor(props){
		super(props)
		this.state={
			trips:[]
		}
		this.getTrips()
	}

	//gets trips from trips database in backend
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


	todayDate = new Date().toISOString().slice(0,10)



  render () {
      const {
      signed_in,
      sign_in_route,
      sign_out_route,
	  current_user
    } = this.props


    return (
    <Router>
	<h1> Trip Planner</h1>
          <React.Fragment>
          {signed_in &&
              <div>
                <a href={sign_out_route}>Sign Out</a>
              </div>
            }
            {!signed_in &&
              <div>
                <a href={sign_in_route}>Sign In</a>
              </div>
            }

		  <Dashboard />
          <Switch>

		  <Route exact path="/trips" render={(props) => <Dashboard {...props} trips={ this.state.trips } current_user={ current_user } current_date = todayDate /> } />




          </Switch>
      </Router>
	  </React.Fragment>
    );
  }
}

export default MainApp
