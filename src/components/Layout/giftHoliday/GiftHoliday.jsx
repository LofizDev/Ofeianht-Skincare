import React,{useState} from 'react'
import './style.scss'
import { connect } from 'react-redux'
import {addToCart} from '../../../redux/shopping/Shopping-action'
function GiftHoliday({ products,addToCart }) {


    return (
        <div id='gift-holi' className='item__slider'>
            <span id='title'>Awesome Presents</span>
            <div className="title">
                <h2 id='title-big' data-aos="fade-down">Holidays Gift Sets</h2>
                <p style={{ fontSize: '14px', marginTop: '15px' }}>Limited edition, limited quantities. Get them while they’re here.</p>
            </div>

            {/* Render Item Slider */}

            <div data-aos="blogs-animation"  className="list-gift">
                <div className="list-gift-wrapper">
                {products.filter(item => item.key === 'gift').map((item) => (
                    <div className='list-gift-item'>
                        <div className="list-gift-img">
                            <img src={item.img} alt="gift" />
                        <div className='overlay-gift'>
                            <button onClick={() => addToCart(item.id)}>Add to cart</button>
                        </div>
                        </div>
                        <div className="list-gift-content">
                            <p className='gift-title'>{item.title}</p>
                            <p className='gift-price'>${item.price}.00</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <button id="btn-pr" class="shopnow"><p>Shop</p><p>Bundles</p></button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    };
};;
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GiftHoliday)
