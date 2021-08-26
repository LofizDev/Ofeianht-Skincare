import React, { useState, useEffect } from 'react'
import './style.scss'
import { bagg, baglight, eye, eyelight, heart, heartlight, compared, comparel } from '../../../common/icon/index'
import { connect } from 'react-redux'
import {addToCart,loadCurrentItem} from '../../../../redux/shopping/Shopping-action'
import shopDetail from '../shopDetail/shopDetail'
import ShopDetail from '../shopDetail/shopDetail'


function ShopItems({ item ,addToCart, current ,loadCurrentItem}) {

    // Hover changes img,icon
    const [isBag, setIsBag] = useState(false)
    const [isEyes, setIsEyes] = useState(false)
    const [isHeart, setIsHeart] = useState(false)
    const [isCompare, setIsCompare] = useState(false)
    const [detailBox,setDetailBox] = useState(false)

    // Handler Detail
    function handleDetail() {
        setDetailBox(!detailBox)
        loadCurrentItem(item)
    }

    

    return (
        <div className='single-item'>
            <div className="single-item-img">
                <img src={item.img} className='pro-im' alt="product" />
            </div>
            <div className="single-content">
                <p className='single-cate'>{item.cate}</p>
                <p className='single-tt'>{item.title}</p>
                <div className="gr-pri">
                    {item?.prevPrice && <p className='remove-pr'>${item.prevPrice}.00</p>}
                    <p className='single-pr'
                        id={item?.prevPrice ? 'single-active' : 'no-single'}
                    >${item.price}.00</p>
                </div>
            </div>
            <ul className="item-gr-icon shop-gr-icon">
                <li onMouseEnter={() => setIsBag(true)}
                    onClick={() => addToCart(item.id)}
                    onMouseLeave={() => setIsBag(false)}
                    className='add'><img src={isBag ? baglight : bagg} alt="bag-icon" />
                </li>

                <li onMouseEnter={() => setIsHeart(true)}
                    onMouseLeave={() => setIsHeart(false)}
                    className='love'><img src={isHeart ? heartlight : heart} alt="heart-icon" />
                </li>

                <li onClick={handleDetail}
                    onMouseEnter={() => setIsEyes(true)}
                    onMouseLeave={() => setIsEyes(false)}
                    className='view'><img src={isEyes ? eyelight : eye} alt="detail-icon" />
                </li>

                <li 
                    onMouseEnter={() => setIsCompare(true)}
                    onMouseLeave={() => setIsCompare(false)}
                    className='view'><img src={isCompare ? comparel : compared} alt="detail-icon" />
                </li>

            </ul>
            <ul className="list-tooltip shop-tooltip">
                <li className={isBag ? 'bag-true' : 'bag-false'}>
                    <div class="tooltip ">
                        <p>Add to cart</p>
                    </div>
                </li>
                <li className={isHeart ? 'heart-true' : 'heart-false'}>
                    <div class="tooltip tooltip-active" >
                        <p>Add to wishlist</p>
                    </div>
                </li>
                <li className={isEyes ? 'eyes-true' : 'eyes-false'}>
                    <div class="tooltip ">
                        <p>Quick View</p>
                    </div>
                </li>
                <li className={isCompare ? 'compare-true' : 'compare-false'}>
                    <div class="tooltip ">
                        <p>Compare</p>
                    </div>
                </li>
            </ul>
       
       {/* Shop Detail */}
            <div className={detailBox ? 'detail__box' : 'none-detail'}>
                {detailBox && <ShopDetail 
                 detailBox={detailBox} setDetailBox={setDetailBox}
                current={current} /> } 

            </div>  
      </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    };
};
const mapStateToProps = (state) => {
    return {
        current: state.shop.currentItem,
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ShopItems)
