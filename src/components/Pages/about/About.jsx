import React from 'react'
import './style.scss'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
import Parallax from '../../common/parallax/Parallax'
function About() {
    return (
        <div className='page__about'>
            <Header />
            <div className="page__about-wrapper">
            <div className="contact-banner">
                    <h2>ABOUT US</h2>
                    <p>If you need to message us, please fill out the form bellow</p>
            </div>

            </div>
            <Parallax/>
            <Footer/>
        </div>
    )
}

export default About
