import React from 'react';
import { Card, CardImg, Row,CardDeck,Col, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, UncontrolledCollapse } from 'reactstrap';
import { Link } from "react-router-dom"


class PastTrips extends React.Component {
	render() {
		const{current_user, trips, current_date }=this.props

		const trip = trips.filter((a,i)=>
		{return(a.user_id === current_user.id)})

  		return (
			<Container>
			<h1 className="text-center"> Past Trips </h1>
			<Row>
				<Col>
					<CardDeck>
						{trip.map((trip, i) =>

						<Col xs={12} key={i}>

						{trip.locations.map ((v, i)=>{
							const tripname = trip.name
							const tripid = trip.id

							return (
								<>
								{ current_date > v.start_date &&
								<Card>
									<CardBody>
										<CardTitle>{tripname}</CardTitle>
										<CardSubtitle>Start Date:{(new Date(v.start_date)).toDateString()}</CardSubtitle>
										<CardSubtitle>End Date:{(new Date(v.start_date)).toDateString()}</CardSubtitle>
										<CardText>Location: { v.location }</CardText>
										<CardText>Details: { v.details }</CardText>
										<Link to={`/tripinfo/${tripid}`}>More Info</Link>

									</CardBody>
								</Card>
								}
								</>
							)

						})}</Col>

					)}
					</CardDeck>
				</Col>
			   </Row>
			</Container>
		);
	}
};

export default PastTrips;
