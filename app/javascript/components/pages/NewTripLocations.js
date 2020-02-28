import React from 'react';
import { Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
import { Link } from "react-router-dom"



class NewTripLocations extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			success:false,
			locations:{
					location: '',
					start_date:'',
					end_date: '',
					details: ''
				},
			locationValid: false,
			start_dateValid: false,
			end_dateValid: false,

			fieldsValid: false
		}
		this.handleChange = this.handleChange.bind(this);

	}


	success =()=> {
		alert("You Have Added A New Trip");
	}


	handleChange = (e) => {
		// check if the value is empty(validations)
		// const dateformat = /^d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
		let {locations} = this.state
		locations[e.target.name] = e.target.value
		if (locations.location !== '') {
			this.setState({locationValid: true})
		} else {
			this.setState({locationValid: false})
		}
		if (locations.start_date !== '') {
			this.setState({start_dateValid: true})
		} else {
			this.setState({start_dateValid: false})
		}
		if (locations.end_date !== '') {
			this.setState({end_dateValid: true})
		} else {
			this.setState({end_dateValid: false})
		}
		this.setState({locations: locations})
	}

	handleSubmit = () => {
		let {locations} = this.state
		this.setState({locations: locations})
		this.props.onSubmit(this.state.locations)
	}


	componentDidMount(){
		// call the places API, to enable it on location input.
		let {locations} = this.state
		var places = require('places.js');
		var placesAutocomplete = places({

		  appId: 'plUPETZRZK4Z',
		  apiKey: '1beace8bb77d86050f898d516af020c5',
		  container: document.querySelector('Input#location'),
	  		}).configure({
		  type: 'city',
	  	});
		placesAutocomplete.on('change', e => {
		locations['location'] =  e.suggestion.name
		this.setState({locations: locations})
		});

	}

	render() {
		const { locationValid, start_dateValid, end_dateValid } = this.state
		const { nameValid } = this.props
		let button;
		// display the apropriate button based on the validation checks.
		let valid = () => {
			if (locationValid && start_dateValid && end_dateValid && nameValid) {
				button = <Link to ="/trips" className="btn btn-primary" onClick={this.handleSubmit}>Add Trip</Link>
			} else {
				button = <a className="btn btn-danger text-white">Add Trip</a>
			}
		}
		valid()

		return(
			<>
			<React.Fragment>

			<FormGroup>
			<Label for="location">Trip Location</Label>
				<Input
					valid={this.state.locationValid === true}
					invalid={this.state.locationValid === false}
					type="text"
					name="location"
					id="location"
					onChange={this.handleChange}
					value={this.state.locations.location}
					placeholder="Enter Location" />
				<FormFeedback>This should not be empty!</FormFeedback>
			</FormGroup>

			<Row>
				<Col md={6}>
					<FormGroup>
						<Label for="start_date"> Start Date </Label>
						<Input
							valid={this.state.start_dateValid === true}
							invalid={this.state.start_dateValid === false}
							type="date"
							name="start_date"
							id="start_date"
							onChange={this.handleChange}
							value={this.state.locations.start_date}
							placeholder="Enter Start Date" />
					<FormFeedback>This should not be empty!</FormFeedback>
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label for="end_date">End Date</Label>
						<Input
							valid={this.state.end_dateValid === true}
							invalid={this.state.end_dateValid === false}
							type="date"
							name="end_date"
							id="end_date"
							onChange={this.handleChange}
							value={this.state.locations.end_date}
							placeholder="Enter End Date" />
					<FormFeedback>This should not be empty!</FormFeedback>
					</FormGroup>
				</Col>
			</Row>

			<FormGroup>
				<Label for="details">Trip Details</Label>
				<Input
					type="textarea"
					name="details"
					id="details"
					onChange={this.handleChange}
					value={this.state.locations.details}
					placeholder="Body" />
			</FormGroup>
			{this.state.success && <Redirect to="/trips" />}
			{button}
			</React.Fragment>
			</>
		)
	}
}
export default NewTripLocations;
