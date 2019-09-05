import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import cross from '../images/mini-cross.png'
import instagram_logo from '../images/iglogo.png'
import facebook_logo from '../images/fblogo.png'


// import footerStyles from './footer.module.scss'
import './footer.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    footer1
                    footer2
                }
            }
        }
    `)

    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col className="d-flex justify-content-center mt-3">  {/* having one Col will auto set to width 12 */}
                        <img src={cross} fluid="true" width={15} height={20} alt="Cross"/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col md="auto" className="d-flex justify-content-center">
                        <p className="footer-links"><Link to="/">
                            ABOUT
                        </Link>
                        </p>
                    </Col >
                        
                    <Col md="auto" className="d-flex justify-content-center">
                        <p className="footer-links"><Link to="/">
                            CONTACT
                        </Link>
                        </p>
                    </Col>
                    <Col md="auto">
                        <div className="d-flex justify-content-center">
                            <p className="footer-links">
                                FOLLOW US
                            </p>
                        </div>
                        <Row>
                            <Col className="d-flex justify-content-center justify-content-md-start social-logo">
                                <a href="https://www.instagram.com/aacf.slo/" target="_blank" rel="noopener noreferrer">
                                    <img src={instagram_logo}  fluid="true" alt="instagram"/>
                                </a>
                                <a href="https://www.facebook.com/groups/aacfslo/" target="_blank" rel="noopener noreferrer">
                                    <img src={facebook_logo} fluid="true" alt="facebook"/>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="auto" className="d-flex justify-content-center">
                        <p className="footer-links" ><Link to="/">
                            ARCHIVE
                        </Link>
                        </p>
                    </Col>
                </Row>

                <div className="text-center footer-end">
                    {/* <p>{data.site.siteMetadata.footer1}</p> */}
                    {/* <p>{data.site.siteMetadata.footer2}</p> */}
                    <p>Made with God`s ❤️ by AACF SLO</p>
                    <p className="pb-0">Copyright © 2019, Asian American Christian Fellowship at California Polytechnic State University - San Luis Obispo</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer