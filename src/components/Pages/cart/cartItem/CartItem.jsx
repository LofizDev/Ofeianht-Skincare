import React, { useEffect, useState } from 'react';
import { addToCart, removeFromCart ,minusFromCart} from '../../../../redux/shopping/Shopping-action';
// Redux
import { connect } from 'react-redux';

const CartItem = ({ item ,addToCart,minusFromCart,removeFromCart}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let price = 0;
        price += item.qty * item.price;
        setTotalPrice(price);
    }, [item, totalPrice, setTotalPrice]);

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <tr>
            <th onClick={() => removeFromCart(item.id)} className='cart-remove'>×</th>
            <th className='cart-thumail'>
                <img style={{ maxHeight: '120px' }} src={item.img} alt="product" />
            </th>
            <th className='cart-name'>{item.title}</th>
            <th className='cart-price'>${item.price}.00</th>
            <th className='cart-quantity'>
                <button onClick={() => minusFromCart(item.id)}>-</button>
                <button className='number-cart'>{item.qty}</button>
                <button onClick={() => addToCart(item.id)}>+</button></th>
            <th className='cart-subtotal'>${totalPrice}.00</th>
        </tr>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    addToCart: (id) => dispatch(addToCart(id)),
    minusFromCart: (id) => dispatch(minusFromCart(id))
  };
};

export default connect(null,mapDispatchToProps)(CartItem);