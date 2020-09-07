import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Head from '../components/head'

import { useStaticQuery, graphql } from 'gatsby'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Img from 'gatsby-image'
import sleep from '../images/sleep.png'
import {Image} from 'react-bootstrap';

import errorStyles from './404.module.scss'


const NotFound = () => {

    return (
        <Layout>
            <Head title="404"/>
            <div className={[errorStyles.heading," image"].join(' ')}>

               <h2>404 Error. Page not found.<br />ZZZZZZZZ</h2>

                  <img src={sleep} alt="" />

            </div>
        </Layout>
    )
}

export default NotFound
