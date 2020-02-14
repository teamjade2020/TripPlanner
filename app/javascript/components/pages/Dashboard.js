import React from 'react';
import { Card, CardImg, Row,CardDeck,Col, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, UncontrolledCollapse } from 'reactstrap';
import { Link } from "react-router-dom"
import Pic from 'images/pic.jpg'


class Dashboard extends React.Component {



	render() {
		const{current_user, trips, current_date }=this.props
		const trip = trips.filter((a,i)=>{
			return(
				a.user_id === current_user.id
			)
		})

		const imgStyle = {
			maxHeight: 128,
			maxWidth: 128
		}

  		return (
			<Container>
			<h1 class="text-center"> Upcoming Trips </h1>
				<Row >
					<Col>
						<CardDeck style ={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
							{trip.map((trip,i) =>

								<Col md={12} xs={12} key = {i}>

									{trip.locations.map ((v, i)=>{
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

									//end date format
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
												<Col md={3}>
													<CardImg left src={Pic} style={imgStyle} alt="travel image" />
												</Col>
												<Col md="auto">
													<CardSubtitle>Start: {formatDay1()}</CardSubtitle>
													<CardSubtitle>End: {formatDay2()}</CardSubtitle>
													<CardText> Days Until Trip: {daystil}</CardText>


													<Link to={`/tripinfo/${tripid}`}>More Info</Link>


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
		);
	}
};

export default Dashboard;