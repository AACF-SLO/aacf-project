import React from 'react'
import { Link, graphql, StaticQuery, useStaticQuery } from 'gatsby'


import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import homeHeading from './home-heading.module.scss'

import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
// import calpoly from '../images/cpstock.jpg'
// import upcoming from '../images/UpcomingEventsCopy-min.jpg'

const HomeHeading = ({ className }) => (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "images/UpcomingEventsCopy-min.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = [data.desktop.childImageSharp.fluid, `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`].reverse()
        return (
            <BackgroundImage
                Tag="section"
                className={className}
                fluid={imageData}
                backgroundColor={`#040e18`}
            >
                <Jumbotron fluid className={[homeHeading.section, "text-center"].join(' ')}>
            {/*  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${upcoming})`}} */}
                    <Container>
                        <Row>
                            <Col>
                                <h1>Upcoming Events!</h1>
                            </Col>
                        </Row>
                        <Row className={["justify-content-around d-flex mt-4"].join(' ')} >  {/* className={["justify-content-around d-flex"].join(' ')} */}
                            <Col xs={12} md={6}>
                                <Link to="/outreach"><Button className={homeHeading.button} size="lg" block variant="primary">FRESHMEN OUTREACH</Button></Link>
                            </Col>
                        </Row>
                        <Row className={["justify-content-around d-flex mt-4"].join(' ')} >  {/* className={["justify-content-around d-flex"].join(' ')} */}
                            <Col xs={12} md={6}>
                                <Link to="/large-group"><Button className={homeHeading.button} size="lg" block variant="primary">LARGE GROUP</Button></Link>
                            </Col>
                        </Row>
                        <Row className={["justify-content-around d-flex mt-4"].join(' ')} >  {/* className={["justify-content-around d-flex"].join(' ')} */}
                            <Col xs={12} md={6}>
                                <Link to="/small-group"><Button className={homeHeading.button} size="lg" block  variant="primary">SMALL GROUP</Button></Link>
                            </Col>
                        </Row>
                        
                    </Container>
                </Jumbotron>

            </BackgroundImage>
        )
      }}
    />
  )
  
const StyledBackgroundSection = styled(HomeHeading)`
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    `

export default StyledBackgroundSection

// const Heading = () => {
//     return  (
//         <Jumbotron fluid className={[homeHeading.section, "text-center"].join(' ')}>
//         {/*  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${upcoming})`}} */}
//             <Container>
//                 <Row>
//                     <Col>
//                         <h1>Upcoming Events!</h1>
//                     </Col>
//                 </Row>
//                 <Row className={["justify-content-around d-flex mt-4"].join(' ')} >  {/* className={["justify-content-around d-flex"].join(' ')} */}
//                     <Col xs={12} md={6}>
//                         <Link to="/outreach"><Button className={homeHeading.button} size="lg" block variant="primary">FRESHMEN OUTREACH</Button></Link>
//                     </Col>
//                 </Row>
//                 <Row className={["justify-content-around d-flex mt-4"].join(' ')} >  {/* className={["justify-content-around d-flex"].join(' ')} */}
//                     <Col xs={12} md={6}>
//                         <Link to="/large-group"><Button className={homeHeading.button} size="lg" block variant="primary">LARGE GROUP</Button></Link>
//                     </Col>
//                 </Row>
//                 <Row className={["justify-content-around d-flex mt-4"].join(' ')} >  {/* className={["justify-content-around d-flex"].join(' ')} */}
//                     <Col xs={12} md={6}>
//                         <Link to="/small-group"><Button className={homeHeading.button} size="lg" block  variant="primary">SMALL GROUP</Button></Link>
//                     </Col>
//                 </Row>
                
//             </Container>
//         </Jumbotron>
//     )
// }

// export default Heading