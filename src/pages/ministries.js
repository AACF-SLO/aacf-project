// TODO: this page is better as a template since there will be variable leaders


import React from "react"

import Img from 'gatsby-image'

import Layout from '../components/layout'

import { graphql, useStaticQuery } from "gatsby"

import ministryStyles from './ministries.module.scss'

import Head from "../components/head"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'

import cross from '../images/cross-about.jpg'


const Ministries = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {category: {eq: "Ministries"}}}) {
              edges {
                node {
                  frontmatter {
                    title
                    featruedImage {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid    
                            }
                        }
                    }
                    ministries {
                      ministry {
                        people {
                          person {
                            detail
                            name
                            core
                            featuredImage {
                              childImageSharp {
                                fluid(maxWidth: 288, quality: 80) {
                                  ...GatsbyImageSharpFluid    
                                }
                              }
                            }
                          }
                        }
                        type
                        responsibility
                      }
                    }
                  }
                }
              }
            }
          }
    `)

    // console.log(data)
    // this is the blog page that holds blog list
    return (
        <Layout>
            <Head title="Ministries"/>
            <div className="mb-5">
                <Jumbotron fluid style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${cross})`}} className={[ministryStyles.heading, "text-center"].join(' ')}>
                    <Container>
                        <Row>
                            <Col>
                                <h1>AACF SLO MINISTRIES</h1>
                                <p>See who's serving AACF SLO!</p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                {data.allMarkdownRemark.edges[0].node.frontmatter.ministries.map((ministry, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Container className="mb-5"> {/* Can be fluid*/}
                                <Row className={ministryStyles.ministryTitle}>
                                    <Col>
                                        <h2 className="text-center">{ministry.ministry.type}</h2>
                                        <hr/>
                                    </Col>
                                </Row>
                                {/* <Row className="justify-content-center">
                                    <Col xs={12} md={8}>
                                        <p>{ministry.ministry.responsibility}</p>
                                        <hr/>
                                    </Col>
                                </Row>
                                className="d-flex justify-content-left"
                                 */}
                                <Row className={"d-flex " + (ministry.ministry.type !== "advisor" ? "justify-content-left" : "justify-content-center")}>
                                {ministry.ministry.people.map((childOfGod, index) => {
                                    if (ministry.ministry.type === 'prayer') {
                                        return (
                                            <Col key={index} className="px-5 py-2 d-flex justify-content-center">
                                                 <h3 className={ministryStyles.prayer}>{ministry.ministry.responsibility}</h3>
                                            </Col>
                                           
                                        );
                                    }

                                    return (
                                        <React.Fragment key={index}>
                                             {/* TODO: Should use react-key-index instead since safer */}
                                            <Col md={4} className="px-5 py-2 d-flex justify-content-center">
                                                <Card style={{ width: '18rem' }} className="border-0">
                                                    <Img fluid={childOfGod.person.featuredImage.childImageSharp.fluid} className="card-img-top"/>
                                                    <Card.Body className={ministryStyles.cardBody}>
                                                        <Card.Title className={ministryStyles.name}>{childOfGod.person.name}</Card.Title>
                                                        <Card.Text className={ministryStyles.detail}>{childOfGod.person.detail}</Card.Text>
                                                        {childOfGod.person.core.trim() !== "" &&
                                                            ( <Card.Text className={ministryStyles.core}>{childOfGod.person.core}</Card.Text>) }
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </React.Fragment>
                                    )
                                })} 
                                    
                                </Row>
                            </Container>
                        </React.Fragment>
                    )
                })}
            </div>
            {/* <h1>Ministries page</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges[0].node.frontmatter.ministries.map((m) => {
                    return (
                        <li key={m.uid}>
                            <p>{m.uid}hello</p>
                            
                            
                        </li>
                    )
                })}
            </ol> */}
        </Layout>
    )
}
// LOOK AT REACT-KEY-INDEX LIB TO FIX KEY ERRORS
export default Ministries

/* <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                hi
                                <p>{edge.node.frontmatter.date}</p>
                            </Link> */
/* <h1>{m.ministry.type}</h1>
{m.ministry.people.map((p) => {
    return (
        <div key={p.id}>
            <p>{p.person.name}</p>
            <img src={p.person.photo.childImageSharp.fluid.base64}/>
        </div>
    )
})} */