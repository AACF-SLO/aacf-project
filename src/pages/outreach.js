import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

import Head from '../components/head'


import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'

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
                            <a href="/" target="_blank">
                            <button>
                                SIGN UP!
                            </button>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </Layout>
    )
}

export default Outreach