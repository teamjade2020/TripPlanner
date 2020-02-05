import React from 'react';
import {
  Card, CardImg, Row,CardDeck,Col, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import { Link } from "react-router-dom"


class Dashboard extends React.Component {
	render() {
		const{current_user, trips, current_date }=this.props

		const trip = trips.filter((a,i)=>{
			return(
				a.user_id === current_user.id
			)

		})

  		return (
			<Container>
			<Row>
			<h1> Upcoming Trips </h1>
			<Col sm={12}>
			<CardDeck>
				{trip.map((trip) =>

					<Col>

						{trip.locations.map ((v, i)=>{
						console.log("inside second map", trip , v)
						const tripname = trip.name
						const tripid = trip.id
						const day1 = Date.parse(current_date)
						const day2 = Date.parse(v.start_date)
						const daystil = (day2 - day1) / (1000 * 3600 * 24)

						return (
						<>
						{ current_date < v.start_date &&
						<>

						<Card>
						<CardBody>
					    <CardTitle>{tripname}</CardTitle>
						<CardSubtitle>Start: {v.start_date} End: {v.end_date}</CardSubtitle>
						<CardText> Days Until Trip: {daystil}</CardText>
						<Link to= { `/tripinfo/${tripid}`}> Trip Details </Link>
						</CardBody>
						</Card>

						</>
						}
						</>
						)
						}
						)}
					</Col>
					)}

			</CardDeck>
			</Col>
			</Row>
			</Container>
		);
	}
};

export default Dashboard;
