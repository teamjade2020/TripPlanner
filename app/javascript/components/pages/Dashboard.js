import React from 'react';
import { Card, CardImg, Row,CardDeck,Col, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, UncontrolledCollapse, CardHeader, Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom"
import Pic from 'images/pic.jpg'

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
			<>
			<Jumbotron>
		        <h1 className="display-3">Hello, {current_user.first_name}</h1>
		        <p className="lead">Welcome to your travel Dashboard!!!</p>
		        <hr className="my-2" />
		        <h1>Upcoming Trips</h1>
	      	</Jumbotron>
			<Container>
			<h1 className="text-center"> Upcoming Trips </h1>
				<Row >
					<Col>
						<CardDeck style ={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

							{trip.map((trip,i) =>

								<Col md={8} xs={8} key = {i}>


									{trip.locations.map ((v, i)=>{
									const tripname = trip.name
									const tripid = trip.id
									const daystil = (Date.parse(v.start_date) - Date.parse(current_date)) / (1000 * 3600 * 24)


									const formatDay = (day) => {
										let date = new Date(day)
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

									return (
									<>

									{ current_date < v.start_date &&

									<Card style={{flex: 1}} key = {i}>
										<CardBody>
											<Row>
												<Col>
													<CardTitle className="text-center">{tripname}<hr /></CardTitle>
												</Col>
											</Row>

											<Row>
												<Col md={5}>
													<CardImg className="card  text-center"
													left src={Pic} style={imgStyle} alt="travel image" />
												</Col>
												<Col md={4}>
													<CardSubtitle>Start: {formatDay(v.start_date)}</CardSubtitle>
													<CardSubtitle>End: {formatDay(v.end_date)}</CardSubtitle>
												</Col>
												<Col md={3}>
													<CardText> Days Until Trip: {daystil}</CardText>

													<Link to={`/tripinfo/${tripid}`}>
													<Button href={`/tripinfo/${tripid}`}>More Info</Button></Link>
												</Col>
											</Row>
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
			</>
		);
	}
};

export default Dashboard;
