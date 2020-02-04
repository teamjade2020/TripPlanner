import React from 'react';
import {
  Card, CardImg, Row,CardDeck,Col, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';

class Dashboard extends React.Component {
	render() {
  		return (
			<Container>
			<Row>
			<h1> Upcoming Trips </h1>
			<Col xs={12}>
			<CardDeck>
				{this.props.trips.filter((trips) =>
				tips.userid === current_user && locations.start_date > Date()

				<Col>
			      <Card>
			        <CardBody>
			          <CardTitle>sample text</CardTitle>
			          <CardSubtitle>sample text</CardSubtitle>
			          <CardText> sample text</CardText>
			          <Button>View Trip Details</Button>
			        </CardBody>
			      </Card>
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
