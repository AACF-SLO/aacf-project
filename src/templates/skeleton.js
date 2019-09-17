import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

import Head from '../components/head'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Jumbotron from 'react-bootstrap/Jumbotron'

import eventsStyles from './events.module.scss'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug } }) {
            frontmatter {
                category
                description
                location
                date
                title
                link
                gif {
                    publicURL
                }
            }
            html
            fields {
                slug
            }
        }
    }
`

const ConnectEvents = () => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <Jumbotron fluid style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${missionStatement})`}} className={[aboutStyles.jumbotronMb0, "text-center"].join(' ')}>
                <Container>
                    <Row>
                        <Col>
                            <h1>AACF MISSION STATEMENT</h1>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </Layout>
    )
}