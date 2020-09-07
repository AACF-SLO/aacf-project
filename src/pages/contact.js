import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

// bootstrap imports
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Img from 'gatsby-image'

import contactStyles from './contact.module.scss'
// import contact from '../images/contact.jpg'
// import contactUs from '../images/contactUs.jpg'
import instagram_logo from '../images/iglogoCopy.png'
import facebook_logo from '../images/fblogo.png'
// import instagram_black from '../images/igblack.png'
// import facebook_black from '../images/fbblack.png'
import link from '../images/link.png'

// console.log(React.version);
const ContactPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "Contact"}}}) {
            edges {
                node {
                    frontmatter {
                        featuredImage {
                            childImageSharp {
                                fluid (maxWidth: 1920, quality: 70 )
                                {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    `)
    return (
        <Layout>
            <Head title="Contact"/>
            {/* <h1>Contact</h1>
            <h2>this is a contact page, <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">contact</a></h2>

            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contact})`}}
            */}
            <Jumbotron fluid  className={[contactStyles.heading, "text-center"].join(' ')}>
                <Img
                    fluid={data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage.childImageSharp.fluid}
                    style={{
                        // position: "fixed",
                        // left: 0,
                        // top: 0,
                        // width: "100%",
                        // height: "100%",
                        // zIndex: -1,
                        position: "fixed",
                        left: 0,
                        top: 0,
                        width: "100%",
                        maxHeight: "100vh",
                        height: "100%",
                        zIndex: -1,
                        }}
                    // imgStyle={{
                    //     backgroundColor: 'black'
                    // }}
                    // backgroundColor={"black"}
                    className={contactStyles.background}
                />
                <Container>
                    <Row>
                        <Col>
                            <h1>CONTACT US</h1>
                        </Col>
                    </Row>
                    <Row className={[contactStyles.info, "justify-content-center"].join(' ')}>
                        <Col sm={12} md={8}>
                            <h3>slo.aacf@gmail.com</h3>
                            {/* TODO: implement React form for newsletter, or integrate netlify forms  */}
                        </Col>
                    </Row>
                    <Row className={[contactStyles.info, "justify-content-center pt-3"].join(' ')}>
                        <Col sm={12} md={10} className={["justify-content-center  d-flex"].join(' ')}>
                            <a href="https://www.instagram.com/aacf.slo/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram_logo}  fluid="true" alt="instagram"/>
                                <p>@aacf.slo</p>
                            </a>
                            <a href="https://www.facebook.com/groups/aacfslo/" target="_blank" rel="noopener noreferrer">
                                <img src={facebook_logo} fluid="true" alt="facebook"/>
                                <p>/aacfslo</p>
                            </a>
                            <a href="https://linktr.ee/aacfslo" target="_blank" rel="noopener noreferrer">
                                <img src={link} fluid="true" alt="facebook"/>
                                <p>/linktree</p>
                            </a>
                        </Col>
                        <Col sm={8} md={10} className="mt-3">
                            <Button className={contactStyles.button} target="_blank" size="lg" variant="light" href="https://jems.networkforgood.com/projects/11454-aacf-chapters-aacf-cpslo-cal-poly-san-luis-obispo">DONATE TO OUR MINISTRY</Button>
                        </Col>
                        <Col sm={8} md={10} className="mt-3">
                            <Button className={contactStyles.button} target="_blank" size="lg" variant="light" href="https://mailchi.mp/555292b0c94e/aacf-slo">JOIN OUR EMAIL NEWSLETTER</Button>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </Layout>
    )
}

export default ContactPage
