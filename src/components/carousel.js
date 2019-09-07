import React from "react"

// import { Link } from 'gatsby' 
//Link is a react component, preloads the page content and loads instantly

import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

import carouselStyle from './carousel.module.scss'

import carouselImage1 from '../images/winter2018.jpg'
import carouselImage2 from '../images/michelle.jpg'
import carouselImage3 from '../images/bball2018.jpg'

const RotatingImages = () => {
    return(        
        <Carousel>
                <Carousel.Item>  
                    <div style={{backgroundImage: `url(${carouselImage1})`}} className={[carouselStyle.resize, "d-none d-lg-block"].join(' ')}></div>
                    {/* <div className="d-lg-none d-xl-none d-block" style={{backgroundImage: `url(${carouselImage1})`}}></div> */}
                    <img
                        className="d-lg-none d-xl-none w-100"
                        src={carouselImage1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{backgroundImage: `url(${carouselImage2})`}} className={[carouselStyle.resize, "d-none d-lg-block"].join(' ')}> {/* works*/}</div>
                    <img
                        className="d-lg-none d-xl-none w-100"
                        src={carouselImage2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{backgroundImage: `url(${carouselImage3})`}} className={[carouselStyle.resize, "d-none d-lg-block"].join(' ')}> {/* works*/}</div>
                    <img
                        className="d-lg-none d-xl-none w-100"
                        src={carouselImage3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
    )
}


export default RotatingImages