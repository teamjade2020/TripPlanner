import React from 'react';
import { Card, CardImg, Row,CardDeck,Col, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, UncontrolledCollapse } from 'reactstrap';
import { Link } from "react-router-dom"

import Pic from 'images/complete.png'


class PastTrips extends React.Component {
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
			<h1 class="text-center" id="header"> Past Trips </h1>
			<Row>
				<Col>
					<CardDeck>

					{trip.map((trip) =>

						<Col xs={12}>

						{trip.locations.map ((v, i)=>{
							const tripname = trip.name
							const tripid = trip.id
							//end date format
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
								{ current_date > v.start_date &&
									<Card style={{flex: 1}} key = {i} id="card">
										<CardBody>
											<Row>
												<Col>
													<CardTitle className="text-center">{tripname}<hr /></CardTitle>
												</Col>
											</Row>

											<Row>
												<Col md={6} className="text-center">
													<CardImg left src={Pic} style={imgStyle} alt="travel image" />
												</Col>
												<Col md={6} className="text-center">
													<CardSubtitle id="dates">Start: {formatDay1()}</CardSubtitle>
													<CardSubtitle>End: {formatDay2()}</CardSubtitle>
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

export default PastTrips;
