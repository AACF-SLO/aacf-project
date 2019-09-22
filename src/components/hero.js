  
import React from "react"
import Img from 'gatsby-image';
import { Z_FIXED } from "zlib";
// import { Link } from 'gatsby';

export default (props) => (
  <React.Fragment>
    <Img
    //   className="w-100 vh-50 center"
      fluid={props.image}
      style={{
          width: `100%`,
          height: `70vh`
      }}
    />
  </React.Fragment>
)