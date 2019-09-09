import React from "react"
// import { Link } from "gatsby"

import Layout from '../components/layout'

import Head from '../components/head'

import aboutStyles from './about.module.scss'

// bootstrap imports
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//images
import aacfLogo from '../images/aacf_logo.png'
import cross from '../images/cross-about.jpg'
import bible from '../images/bible.jpg'
import bibleWoods from '../images/bible-woods.jpg'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <Jumbotron fluid style={{backgroundImage: `url(${cross})`}} className={[aboutStyles.jumbotronMb0, "text-center"].join(' ')}>
                <Container>
                    <Row>
                        <Col>
                            <h1>AACF MISSION STATEMENT</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={12} md={8}>
                            <p>The mission of Asian American Christian Fellowship (AACF) is to reach into the university and collegiate community, primarily to those who are Asian Pacific Americans, with the life-changing message of Jesus Christ.</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Jumbotron fluid style={{backgroundImage: `url(${bible})`}} className={[aboutStyles.jumbotronMb0, "text-center"].join(' ')}>
                <Container>
                    <Row>
                        <Col>
                            <h1>THEME: </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={4}>
                            <h2>Fall</h2>
                            <p>The mission of Asian American Christian Fellowship (AACF) is to reach into the university and collegiate community, primarily to those who are Asian Pacific Americans, with the life-changing message of Jesus Christ.</p>
                        </Col>
                        <Col sm={12} md={4}>
                            <h2>Winter</h2>
                            <p>The mission of Asian American Christian Fellowship (AACF) is to reach into the university and collegiate community, primarily to those who are Asian Pacific Americans, with the life-changing message of Jesus Christ.</p>
                        </Col>
                        <Col sm={12} md={4}>
                            <h2>Spring</h2>
                            <p>The mission of Asian American Christian Fellowship (AACF) is to reach into the university and collegiate community, primarily to those who are Asian Pacific Americans, with the life-changing message of Jesus Christ.</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Jumbotron fluid style={{backgroundImage: `url(${bibleWoods})`}} className={[aboutStyles.jumbotronMb0, "text-center"].join(' ')} >
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={12} md={8}>
                            <h1>OUR VISION</h1>
                            <p>We are committed to making disciples by educating and equipping students in biblical foundations, Christian disciplines, and the development of spiritual gifts in order to prepare them for witness and service on the campus, in the local church, in the marketplace, and in world missions.</p>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <p>We are committed to making disciples by educating and equipping students in biblical foundations, Christian disciplines, and the development of spiritual gifts in order to prepare them for witness and service on the campus, in the local church, in the marketplace, and in world missions.</p>
                        </Col>
                    </Row> */}
                </Container>
            </Jumbotron>
            <Jumbotron fluid style={{backgroundImage: `url(${cross})`}} className={[aboutStyles.jumbotronMb0].join(' ')} >
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>STATEMENT OF FAITH</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="lead text-center">The Asian American Christian Fellowship (AACF) as of division of JEMS, believes:</p>
                            <ul id="statementsOfFaith">
                                <li>That the Bible is God's Word, written by men divinely and uniquely inspired by the Holy Spirit, and that it is the supreme and final authority in all matters of faith and conduct.</li>
                                <li>In One God, eternally existing in three persons: Father, Son and Holy Spirit.</li>
                                <li>In Jesus Christ, the world’s only Savior; in His pre-existence, virgin birth, sinless life, vicarious death, burial, and bodily resurrection and personal return.</li>
                                <li>In the Holy Spirit as a Person, indwelling and empowering the believer, convicting the unsaved and presenting the claims of Christ.</li>
                                <li>That sinful man is lost and can be redeemed only by the death and shed blood of Christ upon the cross through the regeneration of the Holy Spirit.</li>
                                <li>In the resurrection of the dead, the believer to life everlasting and the unbeliever to eternal condemnation.</li>
                                <li>That the Church, the Body of Christ, is comprised of all who have accepted the redemption provided by Christ.</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <h3>Learn More</h3>
                            <a href="http://www.aacf.org/" target="_blank" rel="noopener noreferrer">
                                <img
                                src={aacfLogo}
                                alt="aacf logo"
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </Layout>
    )
}

export default AboutPage