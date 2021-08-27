import React,{useState} from 'react'
import './style.scss'
import { connect } from 'react-redux'
import {addToCart} from '../../../redux/shopping/Shopping-action'
import { Link } from 'react-router-dom'
import { UrlNames } from '../UrlNames'
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

// CALL IT ONCE IN YOUR APP
if (typeof window !== "undefined") {
    injectStyle();
  }
function GiftHoliday({ products,addToCart }) {
    function notify() {
        toast.success('successfully!')
      }
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
                            <button onClick={() =>{notify();addToCart(item.id)}}>Add to cart</button>
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
            <Link to={`${UrlNames.SHOP}`}>
            <button id="btn-pr" class="shopnow"><p>Shop</p><p>Bundles</p></button>
            </Link>
            <ToastContainer  autoClose={1200} />
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
