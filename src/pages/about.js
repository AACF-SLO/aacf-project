import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'

import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>about me</h1>
            <p>this is about me</p>
            <p>Want to work with me? <Link to="/contact">Reach out</Link></p>
        </Layout>
    )
}

export default AboutPage