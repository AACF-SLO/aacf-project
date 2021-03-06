import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

import Head from '../components/head'

import Img from 'gatsby-image'

// bootstrap imports
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import BgImage from '../components/BgImage'

// import Hero from '../components/hero'

// import cross from '../images/cross-about.jpg'


import churchesStyles from './churches.module.scss'

const Churches = () => {
    const data = useStaticQuery(graphql`
    query
    {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "Churches"}}}) {
          edges {
            node {
              frontmatter {
                title
                link
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                churches {
                  church {
                    link
                    name
                    img {
                        childImageSharp {
                            fluid{
                                ...GatsbyImageSharpFluid
                            }
                        }
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
            <Head title="Churches"/>
            {/* style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${cross})`}} */}
            {/* <BgImage fluid={data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage.childImageSharp.fluid}  overlayColor="#04040454">> */}
                <Jumbotron fluid className={[churchesStyles.heading,"text-center"].join(' ')}>
                    {/* <Hero image={data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage.childImageSharp.fluid} /> */}
                    {/* <Img
                            fluid={data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage.childImageSharp.fluid}
                            style={{
                                position: "fixed",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: -1,
                            }}
                            imgStyle={{
                                objectFit: "contain"
                            }}
                            className={churchesStyles.background}
                        /> */}
                    <Container>

                        <Row>
                            <Col>
                                <h1>AACF IS NOT A REPLACEMENT FOR CHURCH!™</h1>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col sm={12} md={8}>
                                <p>People in AACF go to different churches around SLO and in their hometowns. Since most churches are doing
                                online services, we currently do not offer rides to churches. But we still try involve ourselves heavily with the church!
                                    Below are a list of churches in SLO that some members of AACF go to. Click on each church to learn more about them.</p>
                                <p>Click below to add your church or to check other churches!</p>
                                {/* <Button size="lg" variant="primary">I NEED A RIDE!</Button> */}
                                { data.allMarkdownRemark.edges[0].node.frontmatter.link.trim() === "" ?
                                        (<OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Not Ready Yet! </Tooltip>}>
                                            <span className="d-inline-block">
                                                <Button className={churchesStyles.button} disabled style={{ pointerEvents: 'none' }} size="lg" variant="secondary">MORE CHURCHES</Button>
                                            </span>
                                        </OverlayTrigger>
                                        )
                                        : (<Button className={churchesStyles.button} href={data.allMarkdownRemark.edges[0].node.frontmatter.link} rel="noopener noreferrer" target="_blank" size="lg" variant="dark">MORE CHURCHES</Button>) }
                            </Col>
                        </Row>

                    </Container>
                </Jumbotron>
            {/* </BgImage> */}
            <Container className="mb-5 text-center"> {/* Can be fluid*/}
                <Row className="d-flex justify-content-center">
                    {data.allMarkdownRemark.edges[0].node.frontmatter.churches.map((church, index) => {
                        return (
                            <React.Fragment key={index}>
                                {/* {console.log(index)} */}
                                {/* TODO: Should use react-key-index instead */}
                                <Col md={4} lg={3} className="px-2 py-2 d-flex justify-content-center">
                                    <a href={church.church.link} target="_blank" rel="noopener noreferrer">
                                        <Card style={{ width: '14rem' }} className={["border-0", churchesStyles.card].join(' ')}>
                                            <Img fluid={church.church.img.childImageSharp.fluid} className="card-img-top"/>
                                            <Card.Body >
                                                <Card.Title className={churchesStyles.cardText}>{church.church.name}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </Col>
                            </React.Fragment>
                        )
                    })}
                </Row>
            </Container>
        </Layout>

    )
}
// Will need to wrap each card in an <a></a> tag and have a key for each child!

export default Churches
