import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

import Head from '../components/head'


import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import outreachStyles from './outreach.module.scss'



const Outreach = () => {
    const data = useStaticQuery(graphql`
    query
    {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "Outreach"}}}) {
          totalCount
          edges {
            node {
              frontmatter {
                title
                description
                link
                photo {
                  publicURL
                }
              }
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <Head title="Outreach"/>
            <Jumbotron fluid style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${data.allMarkdownRemark.edges[0].node.frontmatter.photo.publicURL})`}} className={[outreachStyles.jumbotron, "text-center"].join(' ')}>
                <Container>
                    <Row>
                        <Col>
                            <h1>Join Us In Outreach!</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={12} md={8}>
                            <p>{data.allMarkdownRemark.edges[0].node.frontmatter.description}</p>
                            {/* <Button size="lg" variant="outline-primary">SIGN UP</Button> */}
                            {console.log(data.allMarkdownRemark.edges[0].node.frontmatter.link)}
                            { data.allMarkdownRemark.edges[0].node.frontmatter.link.trim() === "" ? 
                                (<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Not Ready Yet!</Tooltip>}>
                                    <span className="d-inline-block">
                                        <Button className={outreachStyles.button} disabled style={{ pointerEvents: 'none' }} size="lg" variant="secondary">SIGN UP</Button>
                                    </span>
                                </OverlayTrigger>
                                ) 
                                : (<Button className={outreachStyles.button} href={data.allMarkdownRemark.edges[0].node.frontmatter.link} size="lg" variant="outline-primary">SIGN UP</Button>) }
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </Layout>
    )
}

export default Outreach