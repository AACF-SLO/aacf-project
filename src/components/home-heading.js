import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'gatsby'


import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import homeHeading from './home-heading.module.scss'
import cross from '../images/cross.jpg'



const Heading = () => {
    return  (
        <Jumbotron fluid style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cross})`}} className={[homeHeading.section, "text-center"].join(' ')}>
                <Container>
                    <Row>
                        <Col>
                            <h1>Stay Tuned for Upcoming Events!</h1>
                        </Col>
                    </Row>
                    <Row className={["justify-content-around d-flex mt-4"].join(' ')} >  {/* className={["justify-content-around d-flex"].join(' ')} */}
                        <Col xs={12} md={6}>
                            <Link to="/outreach"><Button size="lg" block variant="primary">Freshmen Outreach</Button></Link>
                        </Col>
                    </Row>
                    <Row className={["justify-content-around d-flex mt-4"].join(' ')} >  {/* className={["justify-content-around d-flex"].join(' ')} */}
                        <Col xs={12} md={6}>
                            <Link to="/large-group"><Button size="lg" block variant="primary">Large Group</Button></Link>
                        </Col>
                    </Row>
                    <Row className={["justify-content-around d-flex mt-4"].join(' ')} >  {/* className={["justify-content-around d-flex"].join(' ')} */}
                        <Col xs={12} md={6}>
                            <Link to="/small-group"><Button size="lg" block  variant="primary">Small Group</Button></Link>
                        </Col>
                    </Row>
                   
                </Container>
            </Jumbotron>
    )
}

export default Heading