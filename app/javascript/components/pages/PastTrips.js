import React from 'react';
import { Card, CardImg, Row,CardDeck,Col, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, UncontrolledCollapse } from 'reactstrap';
import { Link } from "react-router-dom"


class PastTrips extends React.Component {
	render() {
		const{current_user, trips, current_date }=this.props
		const trip = trips.filter((a,i)=>{
			return(
				a.user_id === current_user.id
			)
		})

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
								<Card>
									<CardBody>
										<CardTitle>{tripname}</CardTitle>
										<CardSubtitle>Start Date:{formatDay1()}</CardSubtitle>
										<CardSubtitle>End Date:{formatDay2()}</CardSubtitle>
										<CardText>{ v.location }</CardText>
										<CardText>{ v.details }</CardText>
										<Link to={`/tripinfo/${tripid}`}>More Info</Link>

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
