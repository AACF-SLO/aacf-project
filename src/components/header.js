import React from "react"

// import { Link, graphql, useStaticQuery } from "gatsby"
// graphql and useStaticQuery needed to use graphql
import { Link } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Image from "react-bootstrap/Image"
import logo from "../images/AACF_LOGO_FINAL.png"
// import Container from "react-bootstrap/Container"
// import Button from "react-bootstrap/Button"

// import './header.module.scss' before: <Link className="link", 
// import headerStyles from './header.module.scss'
// now with css component module: <Link className={headerStyles.link}

import './header.scss'


const Header = () => {
    //querying to get title below
    // const data = useStaticQuery(graphql`
    //     query {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)

    // return (
    //     <header className={headerStyles.header}>
    //         <h1>
    //             <Link className={headerStyles.title} to="/">
    //                 {data.site.siteMetadata.title}
    //             </Link>
    //         </h1>
    //         <nav>
    //             <ul className={headerStyles.navList}>
    //                 <li>
    //                     <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
    //                 </li>
    //                 <li>
    //                     <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
    //                 </li>
    //                 <li>
    //                     <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
    //                 </li>
    //                 <li>
    //                     <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
    //                 </li>
    //             </ul>
    //         </nav>
    //     </header>
    // )


    // TODO use react-router-bootstrap for effecient routing
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand className="" >
                <Link to="/">
                    <Image className={["mb-0"].join(' ')} src={logo} />
                </Link>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto mr-3">
                    <NavDropdown title="ABOUT" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">AACF</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Ministries</NavDropdown.Item>
                    </NavDropdown>
                    {/* <Navbar.Brand className="d-none d-lg-block mr-0 px-4" href="#home">
                        <Image className={["mb-0"].join(' ')} src={logo} fluid />
                    </Navbar.Brand> */}
                    <NavDropdown title="WEEKLY" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/">Weekly</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">SAD & BAD</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Senior Banquet</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">AACF United</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Bball Tourney</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="EVENTS" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">SAD & BAD</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Senior Banquet</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">AACF United</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Bball Tourney</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="OUTREACH" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/">Bags of Love</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Inter-fellowhsip</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Senior Banquet</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">AACF United</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Bball Tourney</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link  href="/">CHURCHES</Nav.Link>
                    <Nav.Link  href="#pricing">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header