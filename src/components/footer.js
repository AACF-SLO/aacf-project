import React from "react"
// import {graphql, useStaticQuery, Link} from "gatsby"
import { Link } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import cross from '../images/mini-cross.png'
import instagram_logo from '../images/iglogoCopy.png'
import facebook_logo from '../images/fblogo.png'
import spotify from '../images/spotify.png'


import footerStyles from './footer.module.scss'
// import './footer.scss'

const Footer = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         site {
    //             siteMetadata {
    //                 footer1
    //                 footer2
    //             }
    //         }
    //     }
    // `)

    return (
        <footer>
            <Container fluid className={footerStyles.containerFluid}>
                <Row>
                    <Col className="d-flex justify-content-center mt-3 mb-1">  {/* having one Col will auto set to width 12 */}
                        <img src={cross} fluid="true" width={15} height={20} alt="Cross"/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-2 mb-3">
                    <Col md="auto" className="d-flex justify-content-center">
                        <p className={footerStyles.footerLinks}><Link to="/about">
                            ABOUT
                        </Link>
                        </p>
                    </Col >

                    <Col md="auto" className="d-flex justify-content-center">
                        <p className={footerStyles.footerLinks}><Link to="/contact">
                            CONTACT
                        </Link>
                        </p>
                    </Col>
                    <Col md="auto" className="d-flex justify-content-center">
                        <p className={footerStyles.footerLinks}><a href="https://mailchi.mp/555292b0c94e/aacf-slo" target="_blank" rel="noopener noreferrer">NEWSLETTER</a>
                        </p>
                    </Col>
                    <Col md="auto">
                        <div className="d-flex justify-content-center">
                            <p className={footerStyles.footerLinks}>
                                FOLLOW US
                            </p>
                        </div>
                        <Row>
                            <Col className={[footerStyles.socialLogo, "d-flex justify-content-center justify-content-md-start"].join(' ')}>
                            <a href="https://www.facebook.com/groups/aacfslo/" target="_blank" rel="noopener noreferrer">
                                <img src={facebook_logo} fluid="true" alt="facebook"/>
                            </a>
                                <a href="https://www.instagram.com/aacf.slo/" target="_blank" rel="noopener noreferrer">
                                    <img src={instagram_logo}  fluid="true" alt="instagram"/>
                                </a>
                                   <a href="https://open.spotify.com/playlist/4G4TQUjiQEuDDzfy6yOpis?si=dGYYrUaZTBqzE52_60QOOA" target="_blank" rel="noopener noreferrer">
                                       <img src={spotify} fluid="true" alt="spotify"/>
                                   </a>
                            </Col>
                        </Row>
                    </Col>
                    {/* <Col md="auto" className="d-flex justify-content-center">
                        <p className={footerStyles.footerLinks} ><Link to="/">
                            ARCHIVE
                        </Link>
                        </p>
                    </Col> */}
                </Row>

                <div className={[footerStyles.footerEnd, "text-center"].join(' ')}>
                    {/* <p>{data.site.siteMetadata.footer1}</p> */}
                    {/* <p>{data.site.siteMetadata.footer2}</p> */}
                    <p className="mb-0">Made with God's <span role="img" aria-label="heart">❤️</span> by AACF SLO</p>
                    <p className="mb-0">Copyright © 2020, Asian American Christian Fellowship at California Polytechnic State University - San Luis Obispo</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
