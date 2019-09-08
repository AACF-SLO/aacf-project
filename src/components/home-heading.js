import React from 'react'

import { Link } from 'gatsby'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import homeHeading from './home-heading.module.scss'


const Heading = () => {
    return  (
        <Jumbotron className={[homeHeading.background, "mb-0"].join(' ')}>
            <Container>
                {/* this info can be queried later on */}
                <h1>What is AACF?</h1>
                <p>
                Asian American Christian Fellowship (AACF) is an on-campus fellowship communitiy to 
                grow with each other in the Word of the Bible and live out our faith in San Luis Obispo!
                </p>
                {/* Might want to do some row/col action for more buttons */}
                <Button variant="primary">Learn more</Button>
            </Container>
        </Jumbotron>
    )
}

export default Heading