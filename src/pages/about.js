import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

import Head from '../components/head'


import BackgroundImage from 'gatsby-background-image'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import aacfLogo from '../images/aacf_logo.png'

import aboutStyles from './about.module.scss'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {category: {eq: "about"}}}) {
                edges {
                    node {
                        frontmatter {
                            fall
                            spring
                            winter
                            theme
                            verse
                            fallWords
                            winterWords
                            springWords
                            featuredImage1 {
                                childImageSharp {
                                    fluid (maxWidth: 1000) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            featuredImage2 {
                                childImageSharp {
                                    fluid (maxWidth: 1000) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            featuredImage3 {
                                childImageSharp {
                                    fluid (maxWidth: 1000) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            featuredImage4 {
                                childImageSharp {
                                    fluid (maxWidth: 1000) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            featuredImage5 {
                                childImageSharp {
                                    fluid (maxWidth: 1000) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `}
    render={data => {
      // Set ImageData.
      const imageData1 = [data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage1.childImageSharp.fluid, `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`].reverse()
      const imageData2 = [data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage2.childImageSharp.fluid, `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`].reverse()
      const imageData3 = [data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage3.childImageSharp.fluid, `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`].reverse()
      const imageData4 = [data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage4.childImageSharp.fluid, `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`].reverse()
      const imageData5 = [data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage5.childImageSharp.fluid, `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`].reverse()

      return (
        // <React.Fragment>
        <Layout>
        <Head title="About" />

        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData1}
          backgroundColor={`#040e18`}
        >
            <Jumbotron className={[aboutStyles.container, "text-center"].join(' ')}>
                <Container>
                    <Row className="">
                        <Col>
                            <h1>WHO ARE WE?</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={12} md={8}>
                            <p>Hello! We are a Christian Fellowship at Cal Poly in San Luis Obispo.<br></br><br></br>
                            We are part of a larger organization called Asian American Christian Fellowship that has other
                            fellowships in the other colleges within the country!<br></br><br></br>
                            Please continue reading to learn more about who we are and why we are.</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </BackgroundImage>

        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData2}
          backgroundColor={`#040e18`}
        >
            <Jumbotron className={[aboutStyles.container, "text-center"].join(' ')}>
                <Container>
                    <Row className="">
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
        </BackgroundImage>

        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData3}
          backgroundColor={`#040e18`}
        >
            <Jumbotron fluid className={[aboutStyles.container, "text-center"].join(' ')} >
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
        </BackgroundImage>

        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData4}
          backgroundColor={`#040e18`}
        >
            <Jumbotron fluid className={[aboutStyles.container, "text-center"].join(' ')}>

                <Container>
                    <Row className="justify-content-center mb-5">
                        <Col sm={12} md={9}>
                            <p>Every school year, our leadership team chooses a theme verse and word
                            to guide the direction and focus of the fellowship. We also have a subtheme
                            every quarter that highlights a different aspect of the verse. This year, our theme is...</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={12} md={9}>
                            <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.theme}</h1>
                            <h3>{data.allMarkdownRemark.edges[0].node.frontmatter.verse}</h3>
                            <h2>John 15:5</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5 mb-0">
                        <Col sm={12} md={9} className="">
                             <h2>Subthemes</h2>
                        </Col>
                     </Row>
                    <Row className="pt-md-4 mt-0">
                        <Col sm={12} md={4} className="pt-5 pt-md-0">
                            <h3 className={aboutStyles.themeWords}>{data.allMarkdownRemark.edges[0].node.frontmatter.fallWords}</h3>
                            <h2>Fall</h2>
                            <p>{data.allMarkdownRemark.edges[0].node.frontmatter.fall}</p>
                        </Col>
                        <Col sm={12} md={4} className="pt-5 pt-md-0">
                            <h3 className={aboutStyles.themeWords}>{data.allMarkdownRemark.edges[0].node.frontmatter.winterWords}</h3>
                            <h2>Winter</h2>
                            <p>{data.allMarkdownRemark.edges[0].node.frontmatter.winter}</p>
                        </Col>
                        <Col sm={12} md={4} className="pt-5 pt-md-0">
                            <h3 className={aboutStyles.themeWords} >{data.allMarkdownRemark.edges[0].node.frontmatter.springWords}</h3>
                            <h2>Spring</h2>
                            <p>{data.allMarkdownRemark.edges[0].node.frontmatter.spring}</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

        </BackgroundImage>

        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData5}
          backgroundColor={`#040e18`}
        >
             <Jumbotron fluid className={[aboutStyles.container].join(' ')} >
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>STATEMENT OF FAITH</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="lead text-center">The Asian American Christian Fellowship (AACF) as a division of JEMS, believes:</p>
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
                            <h3>Learn More:</h3>
                            <a href="http://www.aacf.org/" target="_blank" rel="noopener noreferrer">
                                <img
                                src={aacfLogo}
                                alt="aacf logo"
                                width="200px"
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

        </BackgroundImage>

        </Layout>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
//   min-height: 50vh;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
