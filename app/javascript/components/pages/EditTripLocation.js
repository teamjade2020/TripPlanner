import React from 'react';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
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
				}
			}
		}

	componentDidMount(){
		let {locations} = this.state
		console.log("In Life Cycle");
		var places = require('places.js');
		var placesAutocomplete = places({
		  appId: 'plUPETZRZK4Z',
		  apiKey: '1beace8bb77d86050f898d516af020c5',
		  container: document.querySelector('#location')
	  }).configure({
		  // type: 'city',
	  });
		placesAutocomplete.on('change', e => {
		locations['location'] =  e.suggestion.name
		this.setState({locations: locations})
		this.setForm()
		})
	}

	setForm = () =>{
		const { locations } = this.state
		var loc = this.props.locations.shift()
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
	}

	handleEdit = () => {
		this.props.onEdit(this.state.locations)

	}


	render() {
		return(
			<>
			<React.Fragment>

			<FormGroup>
				<Label for="location">Trip Location</Label>
				<Input
					type="text"
					name="location"
					id="location"
					onChange={this.handleChange}
					value={this.state.locations.location}
					 />
      		</FormGroup>

			<Row>
				<Col md={6}>
					<FormGroup>
						<Label for="start_date"> Start Date </Label>
						<Input
							type="date"
							name="start_date"
							id="start_date"
							onChange={this.handleChange}
							value={this.state.locations.start_date}
							 />
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label for="end_date">End Date</Label>
						<Input
							type="date"
							name="end_date"
							id="end_date"
							onChange={this.handleChange}
							value={this.state.locations.end_date}
							 />
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
			<Link to ="/trips" className= "btn btn-primary" onClick={this.handleEdit}>Edit Trip</Link>
			</React.Fragment>
			</>
		)
	}
}
export default EditTripLocations;
