import React, { useState } from 'react';
import { Card, CardImg, Row,CardDeck,Col, CardText, CardBody, CardTitle, CardSubtitle, Button, Container} from 'reactstrap';
import Diego from 'images/Diego.jpeg'
import Jeel from 'images/Jeel.jpeg'
import Aizada from 'images/Aizada.png'
import Earnesto from 'images/Earnesto.jpeg'

class AboutUs extends React.Component {
	render(){

		const imgStyle = {
			maxHeight: 312,
			maxWidth: 312
		}

		return(
			<Container>
				<br /><h1> Meet Team Jade </h1>
				<br />
				<CardDeck style ={{display: 'flex', flexDirection: 'row'}} >
					<Row>
					<Col md={3} xs={3}>
						<Card id="card">
							<CardImg id="imageSrc" src={Jeel} style={imgStyle} alt="travel image" />
							<CardTitle className="text-center"><h2>Jeel</h2></CardTitle>
							<CardSubtitle className="text-center"> jeelsnaik@gmail.com </CardSubtitle>
							<CardSubtitle className="text-center">
							<a href="https://linkedin.com/in/jeel-naik">linkedin.com/in/jeel-naik</a></CardSubtitle>
						</Card>
					</Col>
					<Col md={3} xs={3}>
						<Card id="card">
							<CardImg id="imageSrc" src={Aizada} style={imgStyle} alt="travel image" />
							<CardTitle className="text-center"><h2>Aizada
							</h2></CardTitle>
							<CardSubtitle className="text-center"> Aizadamollenkopf1@gmail.com </CardSubtitle>
							<CardSubtitle className="text-center">
							<a href="https://linkedin.com/in/aizada-mollenkopf">linkedin.com/in/aizada-mollenkopf</a></CardSubtitle>
						</Card>
					</Col>
					<Col md={3} xs={3}>
						<Card id="card">
							<CardImg id="imageSrc" src={Diego} style={imgStyle} alt="travel image" />
							<CardTitle className="text-center"><h2>Diego
							</h2></CardTitle>
							<CardSubtitle className="text-center"> dplancarte7@gmail.com </CardSubtitle>
							<CardSubtitle className="text-center">
							<a href="https://linkedin.com/in/diego-plancarte">linkedin.com/in/diego-plancarte</a></CardSubtitle>
						</Card>
					</Col>
					<Col md={3} xs={3}>
						<Card id="card">
							<CardImg id="imageSrc" src={Earnesto} style={imgStyle} alt="travel image" />
							<CardTitle className="text-center"><h2>Ernesto
							</h2></CardTitle>
							<CardSubtitle className="text-center"> ernst.godoy@gmail.com </CardSubtitle>
							<CardSubtitle className="text-center">
							<a href="https://linkedin.com/in/ernestogodoy">linkedin.com/in/ernestogodoy</a></CardSubtitle>
						</Card>
					</Col>
					</Row>
					</CardDeck>
			</Container>
		)
	}

}
export default AboutUs
