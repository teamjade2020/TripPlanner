import React from 'react'
import {
  Card, CardImg, Row,CardDeck,Col, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';


class TripInfo extends React.Component {

	render(){
		console.log(this.props);
		const  tripid  = this.props.match.params.id
		const { trips }  = this.props
		const trip = trips.find((t)=> t.id === parseInt(tripid))

		return(
			<Container>
			<h1> Trip Info </h1>
			<Row>
			<Col xs={12}>
			<CardDeck>



				<Col>

				  {trip.locations.map ((v, i)=>{
					  const tripname = trip.name
					  return (

						  <>

						  <Card>
						  <CardBody>
						  <CardTitle>{tripname}</CardTitle>
						  <CardSubtitle>Start Date:{v.start_date} End Date:{v.end_date}</CardSubtitle>

						  </CardBody>
						 </Card>

						  </>


					  )
				  }
			  )}
				</Col>



			</CardDeck>
			</Col>
			</Row>


			</Container>
		)

	}
}



export default TripInfo
