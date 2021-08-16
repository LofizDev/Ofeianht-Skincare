import React from 'react'

//Redux connect
import { addToCart } from '../../../../redux/shopping/Shopping-action'
import { connect } from 'react-redux'


function Item({ productData,addToCart }) {
    return (
        <div>
            <h2>{productData.title}</h2>
            <button onClick={addToCart}>add to cart</button>
            <button>view item</button>
        </div>
    )
}
 const mapStateToProps = (dispatch) => {
     return {
         addToCart: (id) => dispatch(addToCart(id))
     }
 }

export default connect(null,mapStateToProps)(Item)
