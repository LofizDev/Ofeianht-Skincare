import React from 'react'
import './style.scss'
import checked from '../../../../assets/images/che.png'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import CloseIcon from '@material-ui/icons/Close';
// Redux
import { connect } from 'react-redux';
import { addToCart } from '../../../../redux/shopping/Shopping-action'
function View({ current, detailBox, setDetailBox, addToCart }) {

    return (
        <>
            <div className="view-detail-item">
                <div onClick={() => setDetailBox(!detailBox)} className="close-de">
                    <CloseIcon />
                </div>
                <div className="view-detail-left">
                    <div className='blog-detail-img'>
                        <img src={current?.hover ? current.hover : current.img} alt="detail-item" />
                    </div>
                </div>
                <div className="view-detail-right">
                    <div className="detail-info">
                        <p className='span-inf'>Home/ Product</p>
                        <p className='title-inf'>{current.title}</p>
                        <div className="price-inf">
                            <p className='pre-inf'>${current.prevPrice}.00</p>
                            <p>${current.price}.00</p>
                        </div>
                        <p className='des-inf'>{current.des}</p>
                        <p className='text-inf'><img style={{ marginRight: '9px' }} width='12px' src={checked} alt="checked" /> Availale <strong>100000</strong> products in stock</p> </div>
                    <div className="detail-btn">
                        <div className="count-detail">
                            <button onClick={() => addToCart(current.id)} className='btn-ad'>Add to cart</button>
                            <button className='btn-bu'>Buy now</button>
                        </div>
                        <div className="share-detail">
                            <div className="detail-left">
                                <FavoriteBorderIcon /> <p>ADD TO WISHLIST</p>
                            </div>
                            <div className="detail-right">
                                <p>SHARE</p> <ShareIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        current: state.shop.currentItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(View)
