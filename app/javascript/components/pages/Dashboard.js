import React from 'react';
import {
  Card, CardImg, Row,CardDeck,Col, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, UncontrolledCollapse
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
			<h1> Upcoming Trips </h1>
			<Row >
				<Col>
					<CardDeck>
						{trip.map((trip,i) =>

							<Col sm={12} key = {i}>

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
								<>

								<Card key = {i}>
								<CardBody>
							    <CardTitle>{tripname}</CardTitle>
								<CardSubtitle>Start: {formatDay1()}</CardSubtitle>
								<CardSubtitle>End: {formatDay2()}</CardSubtitle>
								<CardText> Days Until Trip: {daystil}</CardText>
								{/*<Link to= { `/tripinfo/${tripid}`}> Trip Details </Link>*/}

								<UncontrolledCollapse toggler={`#toggler${v.id}`}>
									<CardText>{ v.location }</CardText>
									<CardText>{ v.details }</CardText>
								</UncontrolledCollapse>
								<Button color="primary" id={`toggler${v.id}`} style = {{marginBottom: '1rem'}}>More Info</Button>
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