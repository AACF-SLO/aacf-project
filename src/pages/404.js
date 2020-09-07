import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <Container >
                <Row>
                    <Col className="text-center">
                        <h1>Page Not Found.</h1>
                        <p><Link to="/">Head home</Link></p>
                    </Col>
                </Row>
            </Container>
            
        </Layout>
    )
}

export default NotFound
