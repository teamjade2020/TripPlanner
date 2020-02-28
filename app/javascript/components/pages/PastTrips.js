import React from 'react';
import { Card, CardImg, Row,CardDeck,Col, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, UncontrolledCollapse } from 'reactstrap';
import { Link } from "react-router-dom"

import Pic from 'images/complete.png'


class PastTrips extends React.Component {
	render() {
		const{current_user, trips, current_date }=this.props

		const trip = trips.filter((a,i)=>
		{return(a.user_id === current_user.id)})

		const imgStyle = {
			maxHeight: 128,
			maxWidth: 128
		}


		return (
			<Container>

			<h1 className="text-center" id="header"> Past Trips </h1>

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

									<Card style={{flex: 1}} key = {i} id="card">
										<CardBody>
											<Row>
												<Col>
													<CardTitle id="title" className="text-center">{tripname}<hr /></CardTitle>
												</Col>
											</Row>

											<Row>
												<Col md={6} className="text-center">
													<CardImg src={Pic} style={imgStyle} alt="travel image" />
												</Col>
												<Col md={6} className="text-center">
													<CardSubtitle id="dates">Start: {(new Date(v.start_date)).toDateString()}</CardSubtitle>
													<CardSubtitle>End: {(new Date(v.start_date)).toDateString()}</CardSubtitle>
													<div id="buttons">

													<Link to={`/tripinfo/${tripid}`}><Button>More Info</Button></Link>
													</div>


												</Col>
											</Row>
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
