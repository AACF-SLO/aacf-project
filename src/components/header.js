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

import headerStyles from './header.module.scss'
import './header-support.scss'

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
        <Navbar sticky="top" className={headerStyles.navbarExpandLg} collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand className={headerStyles.navbarBrand} >
                <Link to="/">
                    <Image className={["mb-0"].join(' ')} src={logo} />
                </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={["ml-auto mr-3", headerStyles.navbarNav].join(' ')}>
                    <NavDropdown className={[headerStyles.navLink, headerStyles.dropdown].join(' ')} title="ABOUT" id="collasible-nav-dropdown">
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/about">AACF</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/ministries">Ministries</NavDropdown.Item>
                    </NavDropdown>
                    {/* <Navbar.Brand className="d-none d-lg-block mr-0 px-4" href="#home">
                        <Image className={["mb-0"].join(' ')} src={logo} fluid />
                    </Navbar.Brand> */}
                    <NavDropdown className={headerStyles.navLink} title="CONNECT" id="collasible-nav-dropdown">
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/large-group">Large Group</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/small-group">Small Group</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/prayer">Prayer</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/moi">MOIs</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/mens">Men's</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/womens">Women's</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className={headerStyles.navLink} title="EVENTS" id="collasible-nav-dropdown">
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/sad-bad">SAD & BAD</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/winter-retreat">Winter Retreat</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/senior-banquet">Senior Banquet</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/united">AACF United</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/bball">Bball Tourney</NavDropdown.Item>
                    </NavDropdown>
                    {/* <NavDropdown className={headerStyles.navLink} title="OUTREACH" id="collasible-nav-dropdown">
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/">Bags of Love</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="#action/3.2">Inter-fellowhsip</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="#action/3.3">Farmer's Market</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="#action/3.3">Freshmen</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link className={headerStyles.navLink} href="/outreach">OUTREACH</Nav.Link>
                    <Nav.Link className={headerStyles.navLink} href="/churches">CHURCHES</Nav.Link>
                    <Nav.Link className={headerStyles.navLink} href="/contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header