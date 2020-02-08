import React from 'react';
import {
  Card, CardImg, Row,CardDeck,Col, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, UncontrolledCollapse
} from 'reactstrap';


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
			<h1> Past Trips </h1>
			<Row>
			<Col>
			<CardDeck>

				{trip.map((trip) =>

  					<Col xs={12}>

					  {trip.locations.map ((v, i)=>{
						  const tripname = trip.name
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
							  <>

							  <Card>
							  <CardBody>
                              <CardTitle>{tripname}</CardTitle>
							  <CardSubtitle>Start Date:{formatDay1()}</CardSubtitle>
							  <CardSubtitle>End Date:{formatDay2()}</CardSubtitle>
							  <CardText> sample text</CardText>
							  <UncontrolledCollapse toggler={`#toggler${v.id}`}>
								  <CardText>{ v.location }</CardText>
								  <CardText>{ v.details }</CardText>
							  </UncontrolledCollapse>
							  <Button color="secondary" id={`toggler${v.id}`} style = {{marginBottom: '1rem'}}>View Trip Details</Button>
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
