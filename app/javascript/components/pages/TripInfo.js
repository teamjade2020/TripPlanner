import React from 'react'
import { Card, CardImg, Row,CardDeck,Col, CardText, CardBody, CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom'
import Pic from 'images/pic.jpg'
var count =0


class TripInfo extends React.Component {
	constructor() {
	   super()
	   this.state = {
		 items: [],
	   }
	 }

	 componentDidMount(){
		const  tripid  = this.props.match.params.id
 		const { trips }  = this.props
 		const trip = trips.find((t)=> t.id === parseInt(tripid))
		let location = trip.locations[0].location.split(",").shift()
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
		count = Math.floor(Math.random()*items.length)
		if (items.length) {
			let url = items[count].src.medium
			var imgElement = document.getElementById('imageSrc');
			imgElement.src = url
		}
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
			<h1 class="text-center"> Trip Info </h1>
				<Row>
					<Col xs={12}>
						<CardDeck>
							<Col>
							{trip && trip.locations.map ((v, i)=>{
								const tripname = trip.name
								const tripid = trip.id
								const day1 = Date.parse(current_date)
								const day2 = Date.parse(v.start_date)
								const daystil = (day2 - day1) / (1000 * 3600 * 24)

								//start date format
								const formatDay1 = () => {
									let date = new Date(v.start_date)
									let d = date.getDate()+1
									let m = date.getMonth()+1
									let y = date.getFullYear()
									if(d<10){
										d='0'+d;
									}
									if(m<10){
										m='0'+m;
									}
									return `${m}/${d}/${y}`
								}

								const formatDay2 = () => {
									let date = new Date(v.end_date)
									let d = date.getDate()+1
									let m = date.getMonth()+1
									let y = date.getFullYear()
									if(d<10){
										d='0'+d;
									}
									if(m<10){
										m='0'+m;
									}
									return `${m}/${d}/${y}`
								}
								//end date format
								return (
									<>
									<Card key={i}>
										<CardBody>
											<CardTitle className="text-center">{tripname}</CardTitle>
											< hr />
											<CardImg id="imageSrc" src={Pic} style={imgStyle} alt="travel image"
											onClick={this.changeImage} />

											<CardSubtitle>Location: {v.location}</CardSubtitle>
											<CardSubtitle>Start Date:{formatDay1()}</CardSubtitle>
											<CardSubtitle> End Date:{formatDay2()}</CardSubtitle>
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
						</CardDeck>
					</Col>
				</Row>
			</Container>
		)

	}
}

export default TripInfo