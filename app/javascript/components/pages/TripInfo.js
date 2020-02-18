import React from 'react'
import { Card, CardImg, Row,CardDeck,Col, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import Pic from 'images/pic.jpg'
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
			<h1 className="text-center"> Trip Info </h1>
				{/*<Row>
					<Col xs={12}>*/}
						<CardDeck>
							<Col>
							{trip && trip.locations.map ((v, i)=>{
								const tripname = trip.name
								const tripid = trip.id
								const daystil = (Date.parse(v.start_date) - Date.parse(current_date)) / (1000 * 3600 * 24)

								return (
									<>
									<Card key={i}>
										<CardBody>
											<CardTitle className="text-center">{tripname}</CardTitle>
											< hr />

											<CardImg id="imageSrc" src={Pic} style={imgStyle} alt="travel image"

											onClick={this.changeImage} />

											<CardSubtitle>Location: {v.location}</CardSubtitle>
											<CardSubtitle>Start Date:{(new Date(v.start_date)).toDateString()}</CardSubtitle>
											<CardSubtitle> End Date:{(new Date(v.end_date)).toDateString()}
											</CardSubtitle>
											<CardSubtitle> Details: {v.details}</CardSubtitle>
											<Link to="/trips" onClick={this.handleDelete}> Delete Trip </Link> &nbsp;
											<Link to={`/edit/${trip.id}`}> Edit Trip </Link>
										</CardBody>
									</Card>
									</>
									)
								}
							)}
							</Col>

							<Input name="emailid" value={this.state.email} onChange={this.handleChange} />
							<Link to="/trips">

							<Button onClick={this.handleSubmit}>Send email
							</Button>
							</Link>
						</CardDeck>
					{/*</Col>
				</Row>*/}
			</Container>
		)
	}
}



export default TripInfo

