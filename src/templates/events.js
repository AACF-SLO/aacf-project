import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

import Head from '../components/head'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

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
                    <Col xs={12} md={6} className={["mb-5"].join(' ')}>
                        <Row className={["justify-content-center"].join(' ')}>
                            <Col xs={12} md={11}>
                                <h1 className={eventsStyles.title}>{props.data.markdownRemark.frontmatter.title}</h1>
                                <h3>{props.data.markdownRemark.frontmatter.description}</h3>
                                <h2>When:</h2>
                                <p>{props.data.markdownRemark.frontmatter.date}</p>
                                <h2>Where:</h2>
                                <p>{props.data.markdownRemark.frontmatter.location}</p>
                                <a href="/">
                                    <button className="" type="button">
                                        SIGN UP
                                    </button>
                                </a>
                            </Col>
                        </Row>
                        
                        {/* <Button variant="primary" size="lg" > 
                            SIGN UP
                        </Button> */}
                        {/* block, disabled*/}
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