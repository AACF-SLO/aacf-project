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
// import Jumbotron from 'react-bootstrap/Jumbotron'

// import Img from 'gatsby-image'
import Hero from '../components/hero'

// import eventsStyles from './events.module.scss'
import skeletonStyles from './skeleton.module.scss'

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
                img {
                    childImageSharp {
                        fluid(maxWidth: 1920, quality: 80 ) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            html
            fields {
                slug
            }
        }
    }
`

const ConnectEvents = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            {/* style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.data.markdownRemark.frontmatter.img.publicURL})`}}  */}
            {/* {props.data.markdownRemark.frontmatter.gif && (
                                <img
                                src={props.data.markdownRemark.frontmatter.gif.publicURL}
                                alt="thumbnail"
                                className={[skeletonStyles.gif].join(' ')}
                            />
                            )} */}
            
            {/* <Jumbotron fluid style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.data.markdownRemark.frontmatter.img.childImageSharp.fluid.src})`}}  className={[skeletonStyles.media, "text-center"].join(' ')}>
                <Container>
                    <Row>
                        <Col>
                            <h1>test</h1>
                            
                            
                            
                        </Col>
                    </Row>
                </Container>
            </Jumbotron> */}
             {/* <div style={{ position: `relative` }}>
                <Img
                css={{ top: 0, left: 0, right: 0, bottom: 0 }}
                style={{ position: `absolute` }}
                fluid={props.data.markdownRemark.frontmatter.img.childImageSharp.fluid}
                />
            </div> */}
            <Hero image={props.data.markdownRemark.frontmatter.img.childImageSharp.fluid}/>
            <Container className={[skeletonStyles.info, "text-center"].join(' ')}>
                <Row>
                    <Col >
                        <h1 className={skeletonStyles.title}>{props.data.markdownRemark.frontmatter.title}</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        <p>{props.data.markdownRemark.frontmatter.description}</p>
                    </Col>
                </Row>
                <Row className={[skeletonStyles.details, "justify-content-center d-flex mt-2 mt-md-4"].join(' ')}>
                    <Col xs={12} md={3}>
                        <h3>Where</h3>
                        <p>{props.data.markdownRemark.frontmatter.location}</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <h3>When</h3>
                        <p>{props.data.markdownRemark.frontmatter.date}</p>
                    </Col>
                </Row>
                <Row className={["justify-content-center d-flex"].join(' ')}>
                    <Col xs={12} md={4}>
                    { props.data.markdownRemark.frontmatter.link.trim() === "" ? 
                        (<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Not Ready Yet!</Tooltip>}>
                            <span className="d-block">
                                <Button className={skeletonStyles.button} disabled style={{ pointerEvents: 'none' }} size="lg" block variant="secondary">Sign Up</Button>
                            </span>
                        </OverlayTrigger>
                        ) 
                        : (<Button className={skeletonStyles.button} href={props.data.markdownRemark.frontmatter.link} size="lg" block variant="outline-primary">SIGN UP</Button>) }
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ConnectEvents