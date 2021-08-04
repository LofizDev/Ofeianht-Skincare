import React from 'react'
import './style.scss'
import logo from '../../../assets/images/logo.svg'
import payment from '../../../assets/images/payment.png'
import call from '../../../assets/images/call.png'
import pin from '../../../assets/images/pinicon.png'
import mail from '../../../assets/images/mal.png'
import fb from '../../../assets/images/fa.png'
import { InstagramIcon, TwitterIcon } from '../icon/index'
function Footer() {
    return (
        <div className='footer'>
            <div className="footer__wrapper">
                <div className="footer__wrapper-content">
                    <div className="content-left">
                        <div className="social">
                            <img src={logo} width='175px' alt="logo" />
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <div className="icon" style={{ display: 'flex' }}>
                                <span><img src={fb} alt="facebook" /></span>
                                <span><InstagramIcon /></span>
                                <span><TwitterIcon /></span>
                            </div>
                        </div>


                    </div>
                    <div className="content-right">
                        <div className="address">
                            <h6 >OUR STORE</h6>
                            <ul>
                                <li><img width='15px' src={pin} />Address: 500 Terry Francois Street <br /> San Francisco, CA 94158</li>
                                <li><img width='15px' src={call} />Phone: 123-456-7890</li>
                                <li><img width='15px' src={mail} /> info@my-domain.com</li>
                            </ul>
                        </div>
                        <div className='about'>
                            <h6>ABOUT US</h6>
                            <ul>
                                <li>Gift Cards</li>
                                <li>Our Story</li>
                                <li>Partners</li>
                                <li>Careers</li>
                                <li>Affiliate Program</li>
                            </ul>
                        </div>
                        <div className='links'>
                            <h6>QUICK LINKS</h6>
                            <ul>
                                <li>How to Buy</li>
                                <li>Payment</li>
                                <li>Delivery</li>
                                <li>Gift Receipt</li>
                                <li>My Account</li>
                            </ul>
                        </div>
                        <div className="help">
                            <h6>HELP</h6>
                            <ul>
                                <li>FAQs</li>
                                <li>Delivery</li>
                                <li>Payment</li>
                                <li>Returns</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-author">
                <div className="wrapper-author">
                    <div className="author-left">
                        <p>© 2021 – <strong>Ofeianht</strong> – Beauty & Cosmetic Theme | All rights reserved.</p>
                    </div>
                    <div className="author-right" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={payment} alt="payment" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
