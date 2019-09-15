import React from "react"

import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'


//add props to Layout function to get all the 'children inside Layout tag

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.stickyFooter}>
                <Header/>
                {props.children} 
            </div>
            <Footer/>
        </div>
        
    )
}

export default Layout