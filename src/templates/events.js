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
//frontmatter: {title: {eq: "BLOG"}},  filter in markdownRemark

// template for each blog page, used in gatsby-node.js
const Events = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <Container fluid className={["my-5"].join(' ')}>
                <Row>
                    <Col xs={12} md={6} className={["mb-5 text-center text-md-left "].join(' ')}>
                        <Row className={["justify-content-md-start justify-content-center"].join(' ')}>
                            <Col xs={10} md={9}>
                                <h1 className={eventsStyles.title}>{props.data.markdownRemark.frontmatter.title}</h1>
                                <h3>{props.data.markdownRemark.frontmatter.description}</h3>
                                <h2>When:</h2>
                                <p>{props.data.markdownRemark.frontmatter.date}</p>
                                <h2>Where:</h2>
                                <p>{props.data.markdownRemark.frontmatter.location}</p>
                                {/* can make this a component below that takes a string for the button*/}
                                { props.data.markdownRemark.frontmatter.link.trim() === "" ? 
                                    (<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Not Ready Yet!</Tooltip>}>
                                        <span className="d-inline-block">
                                            <Button disabled style={{ pointerEvents: 'none' }} size="lg" variant="secondary">Sign Up</Button>
                                        </span>
                                    </OverlayTrigger>
                                    ) 
                                    : (<Button href={props.data.markdownRemark.frontmatter.link} size="lg" variant="outline-primary">SIGN UP</Button>) }
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <img
                            src={props.data.markdownRemark.frontmatter.gif.publicURL}
                            alt="thumbnail"
                        />
                    </Col>
                </Row>
            </Container>
            {/* <img
            src={props.data.markdownRemark.frontmatter.gif.publicURL}
            alt="thumbnail"
            /> */}
            {/* <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div> */}
        </Layout>
    )
}

export default Events