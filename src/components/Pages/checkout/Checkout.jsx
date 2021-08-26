import React, { useState, useEffect } from 'react'
import Header from '../../common/header/Header'
import Parallax from '../../common/parallax/Parallax'
import Footer from '../../common/footer/Footer'
import './style.scss'
import * as Yup from 'yup'
import TextField from './TextField';
import { Form, Formik } from 'formik';
import { connect } from 'react-redux'


function Checkout({ cart }) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let items = 0;
        let price = 0;
        cart.forEach((cart) => {
            items += cart.qty;
            price += cart.qty * cart.price;
        });
        setTotal(price);
    }, [cart]);

    // Validate
    const validate = Yup.object({
        fullname: Yup.string()
            .min(10, 'Must be 10 characters or less')
            .required('Required'),
        address: Yup.string()
            .min(10, 'Must be 10 characters or less')
            .required('Required'),
        phone: Yup.number()
            .min(10,)
            .required('Please Number'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required')
    });
    return (
        <Formik
            initialValues={{
                fullname: '',
                address: '',
                phone: '',
                email: '',
            }}
            validationSchema={validate}
            onSubmit={values => {
                alert('  Successfull      ' + 'Order is being processed' + JSON.stringify(values, null, 2));
            }}
        >
            {formik => {
                return (
                    <>
                        <Header />
                        <div className="checkout__page">
                            <div className="cart-wrapper-banner">
                                <div className="banner-title">
                                    <p>CART</p>
                                    <p className='home-cart'>Home / Cart</p>
                                </div>
                            </div>
                            <div className="checkout__page-form">
                                <div className="page-form-group">
                                    <div className="form-group-left">
                                        <h2>BILLING DETAILS</h2>
                                        {/* <div className="form-input">
                               <p>Full Name <label >*</label></p>
                               <input type="text"  />
                           </div>
                           <div className="form-input">
                               <p>Address <label >*</label></p>
                               <input type="text"  />
                           </div>
                           <div className="form-input">
                               <p>Your Phone <label >*</label></p>
                               <input type="text"  />
                           </div>
                           <div className="form-input">
                               <p>Email <label >*</label></p>
                               <input type="text"  />
                           </div> */}
                                        <Form className="form-gr">
                                            <TextField className='form-input'  label="Full Name" name="fullname" type="text" />
                                            <TextField className='form-input' label="Address" name="address" type="text" />
                                            <TextField className='form-input' label="Phone" name="phone" type="number" />
                                            <TextField className='form-input' label="Email" name="email" type="email" />
                                            <div className="alert-checkout" style={{ backgroundColor: 'green' }}>
                                            {/* <button type="submit">Check Out</button> */}
                                            </div>
                                        </Form>
                                    </div>
                                    <div className="form-group-right">
                                        <h2>ORDER NOTES (OPTIONAL)</h2>
                                        <textarea cols="30" rows="10">Notes about your order,e.g.special notes for delivery.</textarea>
                                    </div>
                                </div>
                            </div>
                            {/* Show items in Your Cart to checkout*/}
                            <div className="checkout__page-list">
                                <h2>YOUR ORDER</h2>
                                <div className="order-group">
                                    <div className="order-wrapper">
                                        <p className='tt-or'>PRODUCT</p>
                                        <p className='tt-or'>SUBTOTAL</p>
                                    </div>
                                    {cart.map((cart) => (
                                        <div className="order-wrapper">
                                            <p className='tt-orr'>{cart.title}  <strong style={{ marginLeft: '8px' }}>x{cart.qty}</strong> </p>
                                            <p style={{ fontWeight: '600', letterSpacing: '2px' }}>${cart.price}.00</p>

                                        </div>
                                    ))}
                                    <div className="order-wrapper">
                                        <p className='tt-or'>Shipping</p>
                                        <p className='tt-or'>Free shipping</p>
                                    </div>
                                </div>
                                <div style={{ fontSize: '20px', lineHeight: '50px' }} className="checkout-total">
                                    TOTAL: ${total}.00
                                </div>
                                <p style={{ marginTop: '30px' }}>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                  <Form>
                                      <button type="submit" className='checkout-btnn'>Check Out</button>                                  
                                  </Form>
                            </div>
                        </div>
                        <Parallax />
                        <Footer />
                    </>
                )

            }}
        </Formik>
    );
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    };
};

export default connect(mapStateToProps)(Checkout)
