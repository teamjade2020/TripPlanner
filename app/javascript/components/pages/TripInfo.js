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
		const  tripid  = this.props.match.params.id
 		const { trips }  = this.props
 		const trip = trips.find((t)=> t.id === parseInt(tripid))
		console.log(tripid);
		console.log(trips);
		console.log(trip);
		console.log(trip.locations[0].location);
		let location = trip.locations[0].location.split(",").shift()
		console.log(location);
		this.getItems(location)
	 }

	getItems(location) {
		fetch("http://api.pexels.com/v1/search?query="+location +"&per_page=15&page=1", {
			headers: {
				'Authorization': '563492ad6f9170000100000195827ff0a5ad4ba1ac6c79e2c59c8c62'
			}
		})
		.then((response) => {
		   console.log("photos",response);
			return response.json()
	   }).
		then((items) => {
			console.log("Items",items);
			this.setState({
			   items: items.photos
		   })
	   })
	}

	handleDelete = () =>{
		this.props.onDelete(this.props.match.params.id)
	}

	changeImage = () => {

		let {items}  =this.state
		// count = count + 1
		count = Math.floor(Math.random()*items.length)
		// this.setState({count: count})
		console.log("API",items[count]);
		if (items.length) {
			let url = items[count].src.medium
			var imgElement = document.getElementById('imageSrc');
			imgElement.src = url

		}

	}

	handleChange = () => {
		this.setState({email: event.target.value})
	}

	handleSubmit = () => {
		fetch(`http://localhost:3000/${this.props.match.params.id}/mailer`,{
			method: "POST",
			body: JSON.stringify(this.state.email),
			headers: {
			  'Content-Type': 'application/json'
			},
		}).then(
			(response) => (response.json())
		).then((response)=>{
			if (response.status === 'success'){
			alert("Message Sent.");
			}else if(response.status === 'fail'){
			alert("Message failed to send.")
			}
		})
	 }

	render(){

		const  tripid  = this.props.match.params.id
		const { trips }  = this.props
		const trip = trips.find((t)=> t.id === parseInt(tripid))
		const imgStyle = {
			maxHeight: 128,
			maxWidth: 128
		}

		// this.getItems(trip.locations[0].location)
		return(
			<Container>
			<h1> Trip Info </h1>
				<Row>
					<Col xs={12}>
						<CardDeck>
							<Col>
							{trip && trip.locations.map ((v, i)=>{
								const tripname = trip.name
								return (
									<>
									<Card key={i}>
										<CardBody>
											<CardTitle>{tripname}</CardTitle>

											<CardImg left id="imageSrc" src={Pic} style={imgStyle} alt="travel image"
											onClick={this.changeImage} />

											<CardSubtitle>Location: {v.location}</CardSubtitle>
											<CardSubtitle>Start Date:{v.start_date} End Date:{v.end_date}</CardSubtitle>
											<Link to="/trips" onClick={this.handleDelete}> Delete Trip </Link>
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
					</Col>
				</Row>
			</Container>
		)

	}
}



export default TripInfo
