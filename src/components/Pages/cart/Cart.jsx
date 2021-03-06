import React, { useState, useEffect } from 'react'
import './style.scss'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
import { Link } from 'react-router-dom';
import CartItem from './cartItem/CartItem'
import { UrlNames } from '../../../components/Layout/UrlNames';
import emptyCart from '../../../assets/images/empty-cart.png'
// Redux
import { connect } from 'react-redux'
import Parallax from '../../common/parallax/Parallax';

function Cart({ cart }) {

    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let items = 0
        let price = 0

        cart.forEach(item => {
            items += item.qty
            price += item.qty * item.price
        })

        setTotalItems(items)
        setTotalPrice(price)

    }, [totalItems, setTotalItems, totalPrice, setTotalPrice, cart])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // Check cart is empty
    if (cart.length === 0) {
        return (
            <>
                <Header />
                <img style={{ display: 'flex', justifyContent: 'center' }} className="cart-empty" width="450px"
                    src={emptyCart}
                    alt="cart empty" />
                <Link to={`${UrlNames.SHOP}`}>
                    <button className="btn-return">Return To Shop</button>
                </Link>

            </>
        );
    }

    return (
        <>
            <Header />
            <div className='shopping__cart'>
                <div className="shopping__cart-wrapper">
                    <div className="cart-wrapper-banner">
                        <div className="banner-title">
                            <p>CART</p>
                            <p className='home-cart'>Home / Cart</p>
                        </div>
                    </div>
                    <div className="cart-wrapper-content">
                        <table>
                            <thead>
                                <tr>
                                    <th className='cart-remove'></th>
                                    <th className='cart-thumail'></th>
                                    <th className='cart-namee'>PRODUCT</th>
                                    <th className='cart-price'>PRICE</th>
                                    <th className='cart-quantity'>QUANTITY</th>
                                    <th className='cart-subtotal'>SUBTOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <CartItem item={item} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cart-wrapper-totals">
                        <div className="cart-container">
                            <div className="cart-container-title">
                                CART TOTAL
                            </div>
                            <div className="cart-container-list">
                                <tbody>
                                    <tr>
                                        <th>SUBTOTAL</th>
                                        <td style={{ display: 'flex', flexDirection: 'column' }}>${totalPrice}.00 <span style={{ marginTop: '8px' }}>Free shipping</span></td>
                                    </tr>
                                    <tr className='sp-t'>
                                        <th>SHIPPING</th>
                                        <td className='sp-text'>Shipping options will be updated during checkout.
                                            Calculate shipping
                                        </td>
                                    </tr>
                                    <tr className='tt-pri'>
                                        <th >TOTAL</th>
                                        <td>${totalPrice}.00</td>
                                    </tr>
                                </tbody>
                            </div>
                            <div className="btn-checkout">
                                <Link to={`${UrlNames.CHECKOUT}`}>
                                    <button style={{width:'100%'}}>Proceed to checkout</button>
                                </Link>
                                <button>Continue Shopping</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Parallax />
            <Footer />
        </>
    )
}



const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        products: state.shop.products,
    }
}
export default connect(mapStateToProps)(Cart)
