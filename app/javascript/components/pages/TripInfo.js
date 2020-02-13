import React from 'react'
import { Card, CardImg, Row,CardDeck,Col, CardText, CardBody, CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom'


class TripInfo extends React.Component {

	handleDelete = () =>{
		this.props.onDelete(this.props.match.params.id)
	}

	render(){
		console.log(this.props);
		const  tripid  = this.props.match.params.id
		const { trips }  = this.props
		const trip = trips.find((t)=> t.id === parseInt(tripid))

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
									<Card>
										<CardBody>
											<CardTitle>{tripname}</CardTitle>
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
						</CardDeck>
					</Col>
				</Row>
			</Container>
		)

	}
}



export default TripInfo
