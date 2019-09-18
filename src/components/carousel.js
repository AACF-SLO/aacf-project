import React from "react"
// import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
// import { Link } from 'gatsby' 
//Link is a react component, preloads the page content and loads instantly

import Carousel from 'react-bootstrap/Carousel'
// import Image from 'react-bootstrap/Image'

import carouselStyle from './carousel.module.scss'

import carouselImage1 from '../images/carousel/winter2018Copy-min.jpg'
import carouselImage2 from '../images/carousel/michelleCopy-min.jpg'
import carouselImage3 from '../images/carousel/bball2018Copy-min.jpg'
import adjustedImage1 from '../images/carousel/winter2018-adjustedCopy-min.jpg'
import adjustedImage3 from '../images/carousel/bballFunny2018copyCopy-min.jpg'

const RotatingImages = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         allFile(filter: {relativeDirectory: {eq: "images/carousel"}}) {
    //           edges {
    //             node {
    //               id
    //               relativeDirectory
    //               childImageSharp {
    //                 fluid {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    // `)

    return(        
        <Carousel pauseOnHover={false} > {/* default is 5000 (5 secs)*/}
                <Carousel.Item>  
                    <div style={{backgroundImage: `url(${adjustedImage1})`}} className={[carouselStyle.resize, "d-none d-lg-block"].join(' ')}></div>
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
                    <div style={{backgroundImage: `url(${adjustedImage3})`}} className={[carouselStyle.resize, "d-none d-lg-block"].join(' ')}> {/* works*/}</div>
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