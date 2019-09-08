import React from "react"

import { Link } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Image from "react-bootstrap/Image"
import logo from "../images/AACF_LOGO_FINAL.png"
import Container from "react-bootstrap/Container"

import './hover.scss'

const Hover = () => {
    // TODO use react-router-bootstrap for effecient routing
    return (
        <div className = "body">
            <div className="container">
                <div className = "card">
                    <div className = "face face1">
                        <div className = "content">
                            <img src = "design.png"></img>
                            <h3>Event 1</h3>
                        </div>
                    </div>
                    <div className = "face face2">
                        <div className = "content">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Ratione hic nihil illo optio expedita earum</p>
                            <a href = "#">More Details</a>
                        </div>
                    </div>
                </div>
                <div className = "card">
                    <div className = "face face1">
                        <div className = "content">
                            <img src = "design.png"></img>
                            <h3>Event 2</h3>
                        </div>
                    </div>
                    <div className = "face face2">
                        <div className = "content">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Ratione hic nihil illo optio expedita earum</p>
                            <a href = "#">More Details</a>
                        </div>
                    </div>
                </div>
                <div className = "card">
                    <div className = "face face1">
                        <div className = "content">
                            <img src = "design.png"></img>
                            <h3>Event 3</h3>
                        </div>
                    </div>
                    <div className = "face face2">
                        <div className = "content">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Ratione hic nihil illo optio expedita earum</p>
                            <a href = "#">More Details</a>
                        </div>
                    </div>
                </div>
        </div>
        </div>    
    )
}

export default Hover