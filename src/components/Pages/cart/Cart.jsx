import React from 'react'
import { connect } from 'react-redux'

function Cart({ cart }) {

    // Check cart is empty
    if(cart.length < 1 ) return <h2>no item in cart</h2>

    return (
        <div className='cart-item'>
            <ul>
                {cart.map((item) => (
                    <h5>{item.title}</h5>
                ))}
            </ul>

        </div>
    )
}




const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps)(Cart)
