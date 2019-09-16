// TODO: this page is better as a template since there will be variable leaders


import React from "react"

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
                    ministries {
                      ministry {
                        people {
                          person {
                            detail
                            name
                            photo {
                                publicURL
                            }
                          }
                        }
                        responsibility
                        type
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
                <Jumbotron fluid style={{backgroundImage: `url(${cross})`}} className={[ministryStyles.heading, "text-center"].join(' ')}>
                    <Container>
                        <Row>
                            <Col>
                                <h1>AACF SLO MINISTRIES</h1>
                                <p>Find who's serving AACF SLO below!</p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                {data.allMarkdownRemark.edges[0].node.frontmatter.ministries.map((ministry, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Container className="mb-5 text-center"> {/* Can be fluid*/}
                                <Row className={ministryStyles.ministryTitle}>
                                    <Col>
                                        <h2>{ministry.ministry.type}</h2>
                                        <hr/>
                                    </Col>
                                </Row>
                                {/* <Row className="justify-content-center">
                                    <Col xs={12} md={8}>
                                        <p>{ministry.ministry.responsibility}</p>
                                        <hr/>
                                    </Col>
                                </Row> */}
                                <Row className="d-flex justify-content-center">
                                {ministry.ministry.people.map((childOfGod, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                             {/* TODO: Should use react-key-index instead since safer */}
                                            <Col md={4} className="px-5 py-2 d-flex justify-content-center">
                                                <Card>
                                                    <Card.Img variant="top" src={childOfGod.person.photo.publicURL} />
                                                    <Card.Body>
                                                        <Card.Title>{childOfGod.person.name}</Card.Title>
                                                        <Card.Text>{childOfGod.person.detail}</Card.Text>
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