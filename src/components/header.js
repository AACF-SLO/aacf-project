import React from "react"


// import { Link, graphql, useStaticQuery } from "gatsby"
// graphql and useStaticQuery needed to use graphql
import { Link } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Image from "react-bootstrap/Image"
import logo from "../images/AACF_LOGO_FINAL-black.png"
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

    //     }
    // `)

    return (
        <Navbar className={headerStyles.navbarExpandLg} expand="lg" sticky="top" variant="light"
        style={{
           backgroundColor: "white",
            // position: "fixed",
        //     height: 0,
        //     left: 0,
        //     top: 0,
        //     width: "100%",
        //     maxHeight: "100vh",
            height: "10%",
        //     zIndex: 1,
            }}
            >
            <Navbar.Brand className={headerStyles.navbarBrand} >
                <Link to="/">
                    <Image className={["mb-0"].join(' ')} src={logo} />
                </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={["ml-auto mr-3", headerStyles.navbarNav].join(' ')}>
                    <NavDropdown className={[headerStyles.navLink, headerStyles.dropdown].join(' ')} title="ABOUT" id="collasible-nav-dropdown">
                        <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/about">AACF</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/ministries" disabled>Ministries</NavDropdown.Item>
                    </NavDropdown>
                    {/* <Navbar.Brand className="d-none d-lg-block mr-0 px-4" href="#home">
                        <Image className={["mb-0"].join(' ')} src={logo} fluid />
                    </Navbar.Brand> */}
                    <NavDropdown className={headerStyles.navLink} title="CONNECT" id="collasible-nav-dropdown">
                        <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/large-group">Large Group</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/small-group">Bible Study</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/prayer">Prayer</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/moi">MOIs</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/mens">Men's</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/womens">Women's</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className={headerStyles.navLink} title="EVENTS" id="collasible-nav-dropdown">
                        <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/sad-bad">SAD & BAD</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/winter-retreat">Winter Retreat</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/senior-banquet">Senior Banquet</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/united">AACF United</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/bball">Bball Tourney</NavDropdown.Item>
                    </NavDropdown>
                    {/* <NavDropdown className={headerStyles.navLink} title="OUTREACH" id="collasible-nav-dropdown">
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="/">Bags of Love</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="#action/3.2">Inter-fellowhsip</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="#action/3.3">Farmer's Market</NavDropdown.Item>
                        <NavDropdown.Item className={headerStyles.dropdownItem} href="#action/3.3">Freshmen</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link className={headerStyles.navLink} as={Link} to="/outreach">OUTREACH</Nav.Link>
                    <Nav.Link className={headerStyles.navLink} as={Link} to="/churches">CHURCHES</Nav.Link>
                    <Nav.Link className={headerStyles.navLink} as={Link} to="/contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
