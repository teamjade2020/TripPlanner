import React from 'react';
import { Form, FormFeedback, FormGroup, Label, Input, Col, Row, Container } from 'reactstrap';
import { Link } from "react-router-dom"
import NewTripLocations from './NewTripLocations'


class NewTrip extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			success:false,
			form:{
				user_id: this.props.current_user.id ,
				name:'',
				locations_attributes:[ ]
			},
			nameValid: false
		}
	}

	handleChange = (e) => {
		let {form} = this.state
		form[e.target.name] = e.target.value
		if (form.name !== '') {
			this.setState({nameValid: true})
		} else {
			this.setState({nameValid: false})
		}
		this.setState({form: form})
	}


	handleSubmit = (locations) => {
		let {form} = this.state
		this.state.form.locations_attributes.push(locations)
		this.setState({form: form})
		this.props.onSubmit(this.state.form)
	}

	render() {
		return(
			<React.Fragment>
				<Container sm={6}>

				<h1 class="text-center" id="header">Add New Trip</h1>

					<Form>
						<FormGroup>
							<Label for="name">Name Of Trip</Label>
							<Input
								valid={this.state.nameValid === true}
								invalid={this.state.nameValid === false}
								type="text"
								name="name"
								id="name"
								onChange={this.handleChange}
								value={this.state.form.name}
								placeholder="Name Your Trip" />
							<FormFeedback invalid>This should not be empty!</FormFeedback>
						</FormGroup>
						<NewTripLocations nameValid={this.state.nameValid} onSubmit={this.handleSubmit}/>
					</Form>
				</Container>
			</React.Fragment>
		)
	}
}
export default NewTrip;
