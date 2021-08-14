import React, { useEffect } from 'react'
import './style.scss'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
import Parallax from '../../common/parallax/Parallax'
import Circle from '../../common/circle-animation/Circle'
import { about1, about2, about3 } from '../../common/icon/index'
function About() {
 
   
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='page__about'>
            <Header />
            <div className="page__about-wrapper">
                <div className="about-banner">
                    <h2>ABOUT US</h2>
                    <p>What we believe. The truth about clean beauty.</p>
                </div>
                <div className="about-stories">
                    <div className="stories__wrapper">
                        <div className="stories__wrapper-left">
                            <h2 className="stories-title">Our Stories</h2>
                            <p className='stories-text'>Ofeianht was born from a place of love. Inspired by our mothers, moved by our daughters, we support and celebrate joy, beauty, and well-being in all people. Our makeup is crafted to help every person present their best self to the world with confidence.</p>
                            <p className='stories-text text-active'>Minimal ingredients for maximum impact. All our products are formulated with this in mind. We use only the highest quality, purest ingredients. Without compromise, our products are never tested on animals.</p>
                        </div>
                        <div className="stories__wrapper-right">
                            <div className="stories-border">
                                <img src={about1} alt="stories" />
                                <div id="circle">
                                    <Circle />
                                </div>
                            </div>
                            <p className='let-intouch'>LET'S GET INTOUCH!</p>
                        </div>
                    </div>
                </div>
                <div className="about-products">
                    <div className="about-products-wrapper">
                        <div className="product-top">
                            <div className="product-top-left">
                                <img src={about2} alt="img-product" />
                            </div>
                            <div className="product-top-right">
                                <div className="top-right-content">
                                    <span className='title-span-pro'>100% Natural</span>
                                    <h4 data-aos="h3-animation" className='title-pro'>Our Guarantee</h4>
                                    <p data-aos="h4-animation" className='text-pro'>We believe that we should not choose between effective and natural cosmetics. Choosing biological and natural products has always been our DNA, and our tireless efforts for a better and more ecological world will never stop.</p>
                                </div>
                                <button data-aos="h5-animation" id='btn-about' className='shopnow'>
                                    <p>Discover</p>
                                    <p>more</p>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <div className="product-bottom-left">
                            <div className="bottom-left-content">
                                    <span className='title-span-pro'>Our Passionate</span>
                                    <h4 data-aos="h3-animation" className='title-pro'>We love cosmetics!</h4>
                                    <p data-aos="h4-animation" className='text-pro'>We are a team of passionate beauty curators who believe in the idea that authentic, efficient and clean beauty will revolutionize the way we think about cosmetics, an idea we think should be spread widely!</p>
                                </div>
                                <button data-aos="h5-animation" id='btn-about' className='shopnow'>
                                    <p>Discover</p>
                                    <p>more</p>
                                    <span></span>
                                </button>
                            </div>
                            <div className="product-bottom-right">
                            <img src={about3} alt="img-products" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-persons">
                    <div data-aos="blogss-animation" className="about-persons-wrapper">
                        <div className="about-person">
                            <img className='person-avatar' src="https://i.pinimg.com/564x/2b/6d/76/2b6d762ac6793e750121bf2c511199ae.jpg" alt="" />
                            <div className="person-info">
                                <span>BEAUTY ADVISOR</span>
                                <p className="name-person">
                                    Haze Jisa
                                </p>
                            </div>
                        </div>
                        <div className="about-person">
                            <img className='person-avatar' src="https://i.pinimg.com/564x/dd/4e/3a/dd4e3a6c278c1934180916e920340ef3.jpg" alt="" />
                            <div className="person-info">
                                <span>CEO - FOUNDER</span>
                                <p className="name-person">
                                    Olivia Smitht
                                </p>
                            </div>
                        </div>
                        <div className="about-person">
                            <img className='person-avatar' src="https://i.pinimg.com/564x/ee/4a/53/ee4a53cd26cb370914a408465ba49fad.jpg" alt="" />
                            <div className="person-info">
                                <span>MANAGER</span>
                                <p className="name-person">
                                   Jannie Marley
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Parallax />
            <Footer />
        </div>
    )
}

export default About
