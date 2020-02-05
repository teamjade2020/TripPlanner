import React from 'react';
import {
  Card, CardImg, Row,CardDeck,Col, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';


class PastTrips extends React.Component {
	render() {
		const{current_user, trips, current_date }=this.props
		console.log( this.props)
		const trip = trips.filter((a,i)=>{
			return(
				a.user_id === current_user.id
			)

		})
		console.log(trip)

  		return (
			<Container>
			<h1> Past Trips </h1>
			<Row>
			<Col xs={12}>
			<CardDeck>

				{trip.map((trip) =>

  					<Col>

					  {trip.locations.map ((v, i)=>{
						  console.log("inside second map", trip , v)
						  const tripname = trip.name
						  console.log("trip name:", tripname)
						  return (
							  <>
							  { current_date > v.start_date &&
							  <>

							  <Card>
							  <CardBody>
                              <CardTitle>{tripname}</CardTitle>
							  <CardSubtitle>Start Date:{v.start_date} End Date:{v.end_date}</CardSubtitle>
							  <CardText> sample text</CardText>
							  <Button>View Trip Details</Button>
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

export default PastTrips;
