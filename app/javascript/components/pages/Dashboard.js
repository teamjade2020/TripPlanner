import React from 'react';
import { Card, CardImg, Row,CardDeck,Col, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, UncontrolledCollapse, CardHeader, Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom"
import Pic from 'images/pic.jpg'
import Pic1 from 'images/pic1.jpg'

class Dashboard extends React.Component {

	render() {
		const{current_user, trips, current_date }=this.props

		// find the trips for the logged in user.
		const trip = trips.filter((a,i)=>
			{return(a.user_id === current_user.id)})


		const imgStyle = {
			maxHeight: 200,
			maxWidth: 200
		}

		return (

			<Container>
			<h1 className="text-center" id="header"> Upcoming Trips </h1>
				<Row >
					<Col md={12} xs={12}>
						<CardDeck style ={{display: 'flex', flexDirection: 'column'}} >

							{trip.map((trip,i) =>

								<Col md={12} xs={12} key = {i}>



									{trip.locations.map ((v, i)=>{
									const tripname = trip.name
									const tripid = trip.id
									const daystil = (Date.parse(v.start_date) - Date.parse(current_date)) / (1000 * 3600 * 24)
									return (
									<>
									{ current_date < v.start_date &&

									<Card style={{flex: 1}} key = {i} id="card">

										<CardBody>
										<div >
											<Row>
												<Col>
													<CardTitle id="title" className="text-center text-capitalize">{tripname}<hr /></CardTitle>
												</Col>
											</Row>

											<Row>
												<Col className="text-center" md={4}>
													<CardImg src={Pic1} className="img-fluid" alt="travel image" />
												</Col>
												<Col md={4} className="text-center" id="dates">

													<CardSubtitle id="dates">Start: {(new Date(v.start_date)).toDateString()}</CardSubtitle>

													&nbsp;

													<CardSubtitle>End: {(new Date(v.end_date)).toDateString()}</CardSubtitle>

												</Col>
												<Col md={4} className="text-center" id="extra">
													<CardText> Days Until Trip: {daystil}</CardText>


													<Link to={`/tripinfo/${tripid}`}><Button>More Info</Button></Link>

												</Col>
											</Row>
										</div>
										</CardBody>
									</Card>
									}

									</>
									)})}
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
