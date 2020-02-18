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
			<Container class= "Display" >
			<h1 class="text-center" id="header"> Upcoming Trips </h1>
				<Row >
					<Col md={12} xs={12}>
						<CardDeck style ={{display: 'flex', flexDirection: 'column'}} >
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

									<Card style={{flex: 1}} key = {i} id="card">
										<CardBody>
										<div >
											<Row>
												<Col>
													<CardTitle className="text-center">{tripname}<hr /></CardTitle>
												</Col>
											</Row>

											<Row>
												<Col className="text-center" md={4}>
													<CardImg left src={Pic} style={imgStyle} alt="travel image" />
												</Col>
												<Col md={4} className="text-center" id="dates">

													<CardSubtitle id="dates">Start: {formatDay1()}</CardSubtitle>

													&nbsp;

													<CardSubtitle>End: {formatDay2()}</CardSubtitle>

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
