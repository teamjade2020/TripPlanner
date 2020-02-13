import React from 'react';
import { Form, FormGroup, Label, Input, Col, Row, Container } from 'reactstrap';
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
			}
		}
	}

	componentDidMount(){
		this.setForm()
	}

	setForm = () =>{
		const { form } = this.state
		const { trips } = this.props
		const trip = trips.find((t)=> t.id === parseInt(this.state.tripid))
		form.name = trip.name
		form.locations = trip.locations
		this.setState({form: trip})
		this.setState({success: true})
		console.log("getform:", this.state.form)
	}

	handleChange = (e) => {
		let {form} = this.state
		form[e.target.name] = e.target.value
		this.setState({form: form})
		console.log("form:", form)
	}

	handleSubmit = (locations) => {
		console.log("EditTrip",locations,this.state.form);
		let {form} = this.state
		console.log("handlesubmit",form);
		this.state.form.locations.push(locations)
		console.log("handlesubmit",this.state.form);
		this.setState({form: form})
		console.log(form);
		this.props.onEdit(this.state.form)
	}

	render() {
		return(
			<React.Fragment>
				<Container sm={6}>
					<Form>
						<FormGroup>
							<Label for="name">Name Of Trip</Label>
							<Input
								type="text"
								name="name"
								id="name"
								onChange={this.handleChange}
								value={this.state.form.name}
								/>
						</FormGroup>
						{this.state.success &&
						<EditTripLocation onEdit={this.handleSubmit} locations={this.state.form.locations}/> }
					</Form>
				</Container>
			</React.Fragment>
		)
	}


}
export default EditTrip;
