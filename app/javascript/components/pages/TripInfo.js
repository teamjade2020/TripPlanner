import React from 'react'
import { Card, CardImg, Row,CardDeck,Col, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import Pic from 'images/pic1.jpg'
var count =0

class TripInfo extends React.Component {
	constructor() {
		super()
		this.state = {
			items: [],
			email: ''
		}
	}

	componentDidMount(){
		// trips array is passed as props, and ID is in url which is passed as params id.
		const  tripid  = this.props.match.params.id
		const { trips }  = this.props
		const trip = trips.find((t)=> t.id === parseInt(tripid))
		// From the places API, the location is stored as "San Diego, California,USA". As trip.locations is an array, get the first value from locations array(trip.locations[0]), get the location name form the hash(trip.locations[0].location), split at the "," and shift() to get location name "San Diego"
		let locations = trip.locations[0].location.split(",")
		let location = locations[0]
		// call the IMAGE API
		this.getItems(location)

	}


	getItems(location) {
		fetch("https://api.pexels.com/v1/search?query="+location +"&per_page=15&page=1", {
			headers: {
				'Authorization': '563492ad6f9170000100000195827ff0a5ad4ba1ac6c79e2c59c8c62'
			}
		})
		.then((response) => {
			return response.json()
		}).
		then((items) => {
			// items response has many keys,including photos(that we need).
			this.setState({
			   items: items.photos  //set the items set to the photos
			})
		})
	}

	handleDelete = () =>{
		this.props.onDelete(this.props.match.params.id)
	}


	changeImage = () => {
		// this method is called when the image is clicked,
		// get the items array, select the random count.
		// select that index(count) from the items and get the image size you want.
		// change the image src.
		let {items}  =this.state
		count = Math.floor(Math.random()*items.length)
		if (items.length) {
			let url = items[count].src.landscape
			var imgElement = document.getElementById('imageSrc');
			imgElement.src = url
		}
	}

	handleChange = () => {
		// get the email value typed in input box.
		this.setState({email: event.target.value})
	}

	handleSubmit = () => {
		//  call the API mailer with emailid and tripid to send the email.
		fetch(`/${this.props.match.params.id}/mailer`,{
			method: "POST",
			body: JSON.stringify(this.state.email),
			headers: {
			'Content-Type': 'application/json'
			},
		}).then(
			(response) => (response.json())
		).then((response)=>{
				alert("Email Sent")
		})
	}


	render(){

		const  tripid  = this.props.match.params.id
		const { trips, current_date }  = this.props
		const trip = trips.find((t)=> t.id === parseInt(tripid))
		const imgStyle = {
			maxHeight: 128,
			maxWidth: 128
		}

		return(
			<Container>

			<h1 className="text-center" id="header"> Trip Info </h1>


				<Row>
					<Col xs={12}>
						<CardDeck>
							<Col>
							{trip && trip.locations.map ((v, i)=>{
								const tripname = trip.name
								const tripid = trip.id
								const daystil = (Date.parse(v.start_date) - Date.parse(current_date)) / (1000 * 3600 * 24)

								return (
									<>
									<Card id="card" key={i}>
										<CardBody>

										<Row>
										<Col>
											<CardTitle className="text-center text-capitalize">{tripname}< hr /></CardTitle>
											</Col>
										</Row>
										<Row>

											<Col md={6} className="text-center">
											<CardSubtitle className="text-center">
											Click Me!
											</CardSubtitle>

											<CardImg id="imageSrc" src={Pic} className="img-fluid" alt="travel image"
											onClick={this.changeImage} onPress={this.changeImage}/>

											<CardSubtitle id="dates" className="text-capitalize">Location: {v.location}</CardSubtitle>

											<CardSubtitle>Start Date: {(new Date(v.start_date)).toDateString()}</CardSubtitle>

											<CardSubtitle> End Date: {(new Date(v.end_date)).toDateString()}</CardSubtitle>
											</Col>

											<Col md={6} id="extra">
											<CardSubtitle> Details: {v.details}</CardSubtitle>
											</Col>
											</Row>

											<Row>
											<Col className="text-center" id="buttons">
											<Link to="/trips" onClick={this.handleDelete}><Button> Delete Trip </Button></Link> &nbsp;
											<Link to={`/edit/${trip.id}`}><Button>Edit Trip</Button></Link>
											</Col>
											</Row>
											<Row className="text-center" id="email">
											<CardSubtitle className="text-center" >
											Share Trip With Your Friends
											</CardSubtitle>
											<Input name="emailid" value={this.state.email} onChange={this.handleChange}
											placeholder="Enter E-mail" />

											<div id="dates">
											<Link to="/trips">
											<Button onClick={this.handleSubmit}>Send email
											</Button>
											</Link>
											</div>
											</Row>
										</CardBody>
									</Card>
									</>
									)
								}
							)}
							</Col>


						</CardDeck>
					</Col>
				</Row>
			</Container>
		)
	}
}



export default TripInfo
