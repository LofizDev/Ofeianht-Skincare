import React, { useEffect } from 'react'
import Footer from '../../common/footer/Footer'
import Parallax from '../../common/parallax/Parallax'
import { contact2, contact3, contact4, contact5 } from '../../common/icon/index'
import Header from '../../common/header/Header'
import './style.scss'

function Contact() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    return (
        <div className='page__contact'>
            <div className="page__contact-wrapper">
                <Header />
                <div className="contact-banner">
                    <h2>CONTACT US</h2>
                    <p>If you need to message us, please fill out the form bellow</p>
                </div>
                <div className="contact-location">
                <div className="image-contact">
                    <img className='paintbrush' src={contact2} alt="contact" />
                    <img className='cream' src={contact3} alt="contact" />
                </div>
                    <div className="location-wrapper">
                        <div className="wrapper-title">
                            <h2>Our Stores</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit ligula bibendum eget dolor. Aenean commodo Cum sociis Theme penatibus et magnis dis parturient montes, nascetur ridiculus mus…..</p>
                        </div>
                        <div className="wrapper-map">
                        <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10699.64431142245!2d-74.01017331224102!3d40.71265436608846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18364da615%3A0x89d74a051477b1a1!2s200%20Broadway%2C%20New%20York%2C%20NY%2010038%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1628167554105!5m2!1svi!2s" title='map' style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <div className="contact-address">
                    <img className='contact4' src={contact4} alt="contact4" className="contact4" />
                    <div className="address-wrapper">
                        <div className="address-detail">
                            <div className="title">
                                <h5>Amsterdam</h5>
                            </div>
                            <div className="content">
                                <p>Keizersgracht 609, 1017 DS Amsterdam, Netherlands</p>
                                <p><strong>Phone: </strong>00123-345-789</p>
                                <p><strong>Email: </strong>khoilam.dev@gmail.com</p>
                            </div>
                        </div>
                        <div className="address-detail">
                            <div className="title">
                                <h5>London</h5>
                            </div>
                            <div className="content">
                                <p>427-437 High Rd Leyton, London E10 5EL, UK</p>
                                <p><strong>Phone: </strong>0443-432-343</p>
                                <p><strong>Email: </strong>lnkhoi-cntt13@tdu.edu.vn</p>
                            </div>
                        </div>
                        <div className="address-detail">
                            <div className="title">
                                <h5>Avignon</h5>
                            </div>
                            <div className="content">
                                <p>135 Avenue Pierre Semard, 84000 Avignon, France</p>
                                <p><strong>Phone: </strong>04677-666-735</p>
                                <p><strong>Email: </strong>khoilam.dev@gmail.com</p>
                            </div>
                        </div>
                        <div className="address-detail">
                            <div className="title">
                                <h5>New York</h5>
                            </div>
                            <div className="content">
                                <p>198 West 21th Street, Suite 721 New York, NY 10010</p>
                                <p><strong>Phone: </strong>00123-345-789</p>
                                <p><strong>Email: </strong>lnkhoi-cntt13@tdu.edu.vn</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="form-wrapper">
                        <div className="form-wrapper-left">
                            <div className="form-content">
                                <h3 className='title-form-h3'>Chat with us</h3>
                                <p id='title-form'>Representatives or Advisors are available:</p>
                                <p><strong>MON-FRI: </strong>5am to 9pm PT</p>
                                <p><strong>SAT-SUN: </strong>6am to 9pm PT</p>
                            </div>
                            <div className="form-img">
                                <img style={{marginTop:'40px'}} src={contact5} alt="contact" />
                            </div>
                        </div>
                        <div className="form-wrapper-right">
                            <div className="form-title">
                                <h6>Email Us</h6>
                                <div className="form-group">
                                    <div className="top-gr">
                                        <input type="text" placeholder='Name*' />
                                        <input type="text" placeholder='Email*' />
                                    </div>
                                    <div className="write-gr">
                                        <textarea  cols="30" rows="10">Write message...</textarea>
                                    </div>
                                    <button>Send Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Parallax />
                <Footer />
            </div>
        </div>
    )
}

export default Contact
