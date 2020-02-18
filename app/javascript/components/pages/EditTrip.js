import React from 'react';
import { Form, FormFeedback, FormGroup, Label, Input, Col, Row, Container } from 'reactstrap';
import { Link } from "react-router-dom"

//pages
import EditTripLocation from './EditTripLocation'


class EditTrip extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			success:false,
			tripid: props.match.params.id,
			form:{
				user_id: this.props.current_user.id ,
				name:'',
				locations:[{
					id: '',
					location:'',
					start_date:'',
					end_date: '',
					details:''
					}]
				},
			nameValid: false
		}
	}

	componentDidMount(){
		const { form } = this.state
		this.setForm()
		if (form.name !== '') {
			this.setState({nameValid: true})
		} else {
			this.setState({nameValid: false})
		}
	}

	setForm = () =>{
		// set the form state based
		const { form } = this.state
		const { trips } = this.props
		const trip = trips.find((t)=> t.id === parseInt(this.state.tripid))
		form.name = trip.name
		form.locations = trip.locations
		this.setState({form: trip})
		this.setState({success: true})

	}

	handleChange = (e) => {
		let {form} = this.state
		let {trips} = this.state
		this.setState({form: form})
		form[e.target.name] = e.target.value
		if (form.name !== '') {
			this.setState({nameValid: true})
		} else {
			this.setState({nameValid: false})
		}
	}

	handleSubmit = (locations) => {
		let {form} = this.state
		this.state.form.locations.push(locations)
		this.setState({form: form})
		this.props.onEdit(this.state.form)
	}

	render() {
		return(
			<React.Fragment>
				<Container sm={6}>
				<h1 class="text-center" id="header"> Edit Trip </h1>
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
								value={this.state.form.name} />
							<FormFeedback>This should not be empty!
							</FormFeedback>
						</FormGroup>
						{this.state.success &&
						<EditTripLocation nameValid = {this.state.nameValid} onEdit={this.handleSubmit} locations={this.state.form.locations}/> }
					</Form>
				</Container>
			</React.Fragment>
		)
	}


}
export default EditTrip;
