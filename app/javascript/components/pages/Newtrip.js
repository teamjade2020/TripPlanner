import React from 'react';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { Link } from "react-router-dom"


//pages
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
			}
		}
	}

	handleChange = (e) => {
		let {form} = this.state
		form[e.target.name] = e.target.value
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

			<Form>
			<FormGroup>
        	<Label for="name">Name Of Trip</Label>
        	<Input
			type="text"
			name="name"
			id="name"
			onChange={this.handleChange}
			value={this.state.form.name}
			placeholder="Name Your Trip" />
      		</FormGroup>

			<NewTripLocations onSubmit={this.handleSubmit}/>

			</Form>
			</React.Fragment>


		)
	}


}
export default NewTrip;
