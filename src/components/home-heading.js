import React from 'react'
import { Link } from 'gatsby'


import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import homeHeading from './home-heading.module.scss'
import calpoly from '../images/cpstock.jpg'
import upcoming from '../images/UpcomingEvents.jpg'



const Heading = () => {
    return  (
        <Jumbotron fluid style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${upcoming})`}} className={[homeHeading.section, "text-center"].join(' ')}>
                <Container>
                    <Row>
                        <Col>
                            <h1>Upcoming Events!</h1>
                        </Col>
                    </Row>
                    <Row className={["justify-content-around d-flex mt-4"].join(' ')} >  {/* className={["justify-content-around d-flex"].join(' ')} */}
                        <Col xs={12} md={6}>
                            <Link to="/outreach"><Button className={homeHeading.button} size="lg" block variant="primary">FRESHMEN OUTREACH</Button></Link>
                        </Col>
                    </Row>
                    <Row className={["justify-content-around d-flex mt-4"].join(' ')} >  {/* className={["justify-content-around d-flex"].join(' ')} */}
                        <Col xs={12} md={6}>
                            <Link to="/large-group"><Button className={homeHeading.button} size="lg" block variant="primary">LARGE GROUP</Button></Link>
                        </Col>
                    </Row>
                    <Row className={["justify-content-around d-flex mt-4"].join(' ')} >  {/* className={["justify-content-around d-flex"].join(' ')} */}
                        <Col xs={12} md={6}>
                            <Link to="/small-group"><Button className={homeHeading.button} size="lg" block  variant="primary">SMALL GROUP</Button></Link>
                        </Col>
                    </Row>
                   
                </Container>
            </Jumbotron>
    )
}

export default Heading