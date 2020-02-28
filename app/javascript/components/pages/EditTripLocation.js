import React from 'react';
import { Form, FormFeedback, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { Link } from "react-router-dom"



class EditTripLocations extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			success:false,
			locations:{
					id: '',
					location: '',
					start_date:'',
					end_date: '',
					details: ''
				},
				locationValid: false,
				start_dateValid: false,
				end_dateValid: false,
			}
		}

	componentDidMount(){
		let {locations} = this.state
		var places = require('places.js');
		var placesAutocomplete = places({
			appId: 'plUPETZRZK4Z',
			apiKey: '1beace8bb77d86050f898d516af020c5',
			container: document.querySelector('#location'),
		}).configure({
			type: 'city',
		});
		placesAutocomplete.on('change', e => {
		locations['location'] =  e.suggestion.name
		this.setState({locations: locations})
		});
		this.setForm()
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

	setForm = () =>{
		const { locations } = this.state
		var loc = this.props.locations[0]
		locations['id'] = loc['id']
		locations['location'] = loc['location']
		locations['start_date'] = loc['start_date']
		locations['end_date'] = loc['end_date']
		locations['details'] = loc['details']

		this.setState({locations: locations})
	}


	handleChange = (e) => {
		let {locations} = this.state
		locations[e.target.name] = e.target.value
		this.setState({locations: locations})
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

	handleEdit = () => {
		this.props.onEdit(this.state.locations)
	}


	render() {
		const { locationValid, start_dateValid, end_dateValid, fieldsValid } = this.state
		const { nameValid } = this.props
		let button;
		let valid = () => {
			if (locationValid && start_dateValid && end_dateValid && nameValid) {
				button = <Link to ="/trips" className= "btn btn-primary" onClick={this.handleEdit}>Edit Trip</Link>
			} else {
				button = <a className= "btn btn-secondary text-white">Edit Trip</a>
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
					value={this.state.locations.location} />
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
							value={this.state.locations.start_date} />
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
							value={this.state.locations.end_date} />
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
					/>
			</FormGroup>
			{this.state.success && <Redirect to="/trips" />}
			{button}
			</React.Fragment>
			</>
		)
	}
}
export default EditTripLocations;
