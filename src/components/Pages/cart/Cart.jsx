import React from 'react'
import './style.scss'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
// Redux
import { connect } from 'react-redux'

function Cart({ cart }) {

    // Check cart is empty
    if (cart.length < 1) return <h2>no item in cart</h2>

    return (
        <>
            <Header />
            <div className='shopping__cart'>
                <div className="shopping__cart-wrapper">
                    <div className="cart-wrapper-banner">
                        <h5>CART</h5>
                        <p>Home/cart</p>
                    </div>
                    <div className="cart-wrapper-content">
                        <table>
                            <thead>
                                <tr>
                                    <th className='cart-remove'></th>
                                    <th className='cart-thumail'></th>
                                    <th className='cart-name'>PRODUCT</th>
                                    <th className='cart-price'>PRICE</th>
                                    <th className='cart-quantity'>QUANTITY</th>
                                    <th className='cart-subtotal'>SUBTOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr>
                                        <th className='cart-remove'>X</th>
                                        <th className='cart-thumail'>
                                            <img style={{ maxWidth: '100px' }} src={item.img} alt="product" />
                                        </th>
                                        <th className='cart-name'>{item.title}</th>
                                        <th className='cart-price'>{item.price}</th>
                                        <th className='cart-quantity'><button>-</button><span>3</span><button>+</button></th>
                                        <th className='cart-subtotal'>$100.00</th>
                                    </tr>
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
                                        <td>$150.00</td>
                                    </tr>
                                    <tr>
                                        <th>SHIPPING</th>
                                        <td>Shipping options will be updated during checkout.
                                            Calculate shipping
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>TOTAL</th>
                                        <td>$889.00</td>
                                    </tr>
                                </tbody>
                            </div>
                            <div className="btn-checkout">
                                <button>Proceed to checkout</button>
                                <button>Continue Shopping</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}



const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps)(Cart)
