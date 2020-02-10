import React from 'react';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
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
				}
			}
		}


	handleChange = (e) => {
		let {locations} = this.state
		locations[e.target.name] = e.target.value
		this.setState({locations: locations})
	}

	handleSubmit = () => {
		this.props.onSubmit(this.state.locations)

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
					placeholder="Enter Location" />
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
							placeholder="Enter Start Date" />
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
							placeholder="Enter End Date" />
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
			<Link to ="/trips" className= "btn btn-primary" onClick={this.handleSubmit}>Add Trip</Link>
			</React.Fragment>
			</>
		)
	}
}
export default NewTripLocations;
