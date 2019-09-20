import React, { Component } from "react";
import { graphql, useStaticQuery } from 'gatsby'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Img from 'gatsby-image'
import './carousel.scss'
import carouselStyles from './carousel.module.scss'

const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      fade:true,

      autoplay: true,
      autoplaySpeed: 2500,
      speed: 500,
      pauseOnHover: false,
      
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false
    };

    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "images/carousel"}}) {
              edges {
                node {
                  name
                  relativeDirectory
                  childImageSharp {
                      fluid(maxWidth: 1440, quality: 100) {
                          ...GatsbyImageSharpFluid
                      }
                  }
                }
              }
            }
          }
    `)

    return (
        

        <div>
            <Slider {...settings}>
            {data.allFile.edges.map((image, index) => {
                return (
                    <React.Fragment key={index}>
                        <div className={carouselStyles.parent}>
                            <Img
                              fluid={image.node.childImageSharp.fluid}
                            />
                        </div>
                    </React.Fragment>
                );

            })}
            
            
            </Slider>
        </div>
        );
}

export default Carousel