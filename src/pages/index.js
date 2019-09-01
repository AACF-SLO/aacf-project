import React from "react"

import { Link } from 'gatsby' // this allows page to not render once clicked
//Link is a react component, preloads the page content and loads instantly

import Layout from '../components/layout'

import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello</h1>
            <h2>this is a test</h2>
            <p>Need a developer?<Link to="/contact"> Contact me</Link></p>
        </Layout>
    )
    
} // renders html 

export default IndexPage  //exporting react component

// export default () => <div>Hello world!</div>
