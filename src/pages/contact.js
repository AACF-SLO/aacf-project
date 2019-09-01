import React from "react"

import Layout from '../components/layout'
import Head from "../components/head"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <h2>this is a contact page, <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">contact</a></h2>
        </Layout>
    )
}

export default ContactPage