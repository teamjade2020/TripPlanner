import React, { useState } from 'react';
import { Card, CardImg, Row,CardDeck,Col, CardText, CardBody, CardTitle, CardSubtitle, Button, Container} from 'reactstrap';
import Diego from 'images/Diego.jpeg'
import Jeel from 'images/Jeel.jpeg'
import Aizada from 'images/Aizada.png'
import Earnesto from 'images/Earnesto.jpeg'

class AboutUs extends React.Component {
	render(){

		const textStyle = {
			color: "#00a86b",
			fontWeight: "900",
			fontSize: '125%'
		}

		return(
			<Container>
				<br /><h1> Meet Team <span style={textStyle}>JADE</span></h1>
				<br />
				<CardDeck style ={{display: 'flex', flexDirection: 'row'}} >
					<Row sm={2} xs={1}>
					<Col>
						<Card id="card">
							<CardImg className="img-fluid" id="imageSrc" src={Jeel} alt="travel image" />
							<CardTitle className="text-center"><h2><span style={textStyle}>J</span>eel</h2></CardTitle>
							<CardSubtitle className="text-center"> jeelsnaik@gmail.com </CardSubtitle>
							<CardSubtitle className="text-center">
							<a href="https://linkedin.com/in/jeel-naik">linkedin.com/in/jeel-naik</a></CardSubtitle>
						</Card>
					</Col>
					<Col>
						<Card id="card">
							<CardImg id="imageSrc" src={Aizada} className="img-fluid" alt="travel image" />
							<CardTitle className="text-center"><h2><span style={textStyle}>A</span>izada</h2></CardTitle>
							<CardSubtitle className="text-center"> Aizadamollenkopf1@gmail.com </CardSubtitle>
							<CardSubtitle className="text-center">
							<a href="https://linkedin.com/in/aizada-mollenkopf">linkedin.com/in/aizada-mollenkopf</a></CardSubtitle>
						</Card>
					</Col>
					<Col>
						<Card id="card">
							<CardImg id="imageSrc" src={Diego} className="img-fluid" alt="travel image" />
							<CardTitle className="text-center"><h2><span style={textStyle}>D</span>iego</h2></CardTitle>
							<CardSubtitle className="text-center"> dplancarte7@gmail.com </CardSubtitle>
							<CardSubtitle className="text-center">
							<a href="https://linkedin.com/in/diego-plancarte">linkedin.com/in/diego-plancarte</a></CardSubtitle>
						</Card>
					</Col>
					<Col>
						<Card id="card">
							<CardImg id="imageSrc" src={Earnesto} className="img-fluid" alt="travel image" />
							<CardTitle className="text-center"><h2><span style={textStyle}>E</span>rnesto</h2></CardTitle>
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
