import React from 'react'
import { Card, CardImg, Row,CardDeck,Col, CardText, Button, Container, Jumbotron } from 'reactstrap';
import NewTrip from 'images/NewTrip.gif'
import UpcomingTrips from 'images/UpcomingTrips.gif'
import SendEmail from 'images/SendEmail.gif'

class Tutorial extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { sign_in_route, signed_in, sign_out_route, new_user_registration_path} = this.props
        return (
            <React.Fragment>
                <Jumbotron>
                    <h1>Welcome to TripPlanner!</h1>
                    <hr className="my-2"/>
                    <p>The simple travel assistant that will help you organize and share any upcomng trips!</p>
                </Jumbotron>
                <Container xs={4} className="themed-container">
                    <CardDeck style={{display: 'flex', flexDirection: 'column'}} >
                        <Card  style={{border: 'none'}}>
                            <Row sm={2} xs={1}>
                                <Col xs="auto" md={4}>
                                    <CardText className="text-center">
                                        <h1>Creating upcoming trips is fast and easy!</h1>
                                    </CardText>
                                </Col>
                                <Col xs="auto">
                                        <CardImg src={NewTrip} className="img-fluid shadow p-3 mb-5 bg-white rounded" alt="creating a new trip" />
                                </Col>
                            </Row>
                        </Card>
                        <br />
                        <br />
                        <Card style={{border: 'none'}} >
                            <Row sm={2} xs={1}>
                                <Col xs="auto">
                                    <CardImg src={UpcomingTrips} className="img-fluid shadow p-3 mb-5 bg-white rounded" alt="viewing upcoming trips"/>
                                </Col>
                                <Col xs="auto" md={6}>
                                    <CardText className="text-center">
                                        <h1>View your trips and get a glimpse of what there is to explore at your destination!</h1>
                                    </CardText>
                                </Col>
                            </Row>
                        </Card>
                        <br />
                        <br />
                        <Card style={{border: 'none'}} >
                            <Row sm={2} xs={1}>
                                <Col xs="auto" md={4}>
                                    <CardText className="text-center">
                                        <h1>Travelling with someone? Share your trip instatly!</h1>
                                    </CardText>
                                </Col>
                                <Col xs="auto">
                                    <CardImg src={SendEmail} className="img-fluid shadow p-3 mb-5 bg-white rounded" alt="sharing trip with email"/>
                                </Col>
                            </Row>
                        </Card>
                    </CardDeck>
                    <Row xs={1}>
                        <h1 className="text-center">Ready to get started?</h1>
                    </Row>
                    <Row xs={1}>
                        <Col>
                            <div className="text-center">
                            {signed_in &&
                                <Button href="/newtrip" color="primary">Add New Trip</Button>
                            }
                            {!signed_in &&
                            <>
                                <Button className="btn" color="secondary" href={new_user_registration_path}>Sign Up</Button> &nbsp;
                                <Button className="btn" color="secondary" href={sign_in_route}>Sign In</Button>
                            </>
                            }
                            </div>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
            </React.Fragment>
        )
    }
}

export default Tutorial;