import React, { useState } from 'react'
import { bagg, baglight, eye, eyelight, heart, heartlight, compared, comparel } from '../../../common/icon/index'
//Redux connect
import { addToCart, compareFromCart, loadCurrentItem } from '../../../../redux/shopping/Shopping-action'
import { connect } from 'react-redux'
// Toastify
import { injectStyle } from 'react-toastify/dist/inject-style';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Item({ loadCurrentItem, item, addToCart, compareBox, setCompareBox, compareFromCart, overlayBox, setOverlayBox, detailBox, setDetailBox }) {

    // Hover changes img,icon
    const [isBag, setIsBag] = useState(false)
    const [isEyes, setIsEyes] = useState(false)
    const [isHeart, setIsHeart] = useState(false)
    const [isImg, setIsImg] = useState(false)
    const [isCompare, setIsCompare] = useState(false)

    // CALL IT ONCE IN MY APP
    if (typeof window !== 'undefined') {
        injectStyle();
    }

    // Handler Compare
    function handleCompare() {
        setCompareBox(!compareBox)
        compareFromCart(item.id)
        setOverlayBox(!overlayBox)
    }
    // Handler Detail
    function handleDetail() {
        setDetailBox(!detailBox)
        loadCurrentItem(item)
    }
    // Handler Click
    function handlClick() {
        notify();
        addToCart(item.id)
    }
    // Toastify success add to cart
    const notify = () => toast.success('successfully!');

    return (
        <>
        <ToastContainer className="foo" autoClose={1200}/>
        <div onMouseEnter={() => setIsImg(true)}
            onMouseLeave={() => setIsImg(false)} id='item-slider'>
            <div className="lists-item-img">
                <p style={{ display: isImg ? 'none' : 'block' }}
                    className={item.discount === '' ? '' : 'discount'}>
                    {item.discount}
                </p>
                <p style={{ display: isImg ? 'none' : 'block' }}
                    className={item.sold === '' ? '' : 'sold'}>
                    {item.sold}
                </p>
                <p
                    style={{ display: isImg ? 'none' : 'block' }}
                    className={item.new === '' ? '' : 'new'}>{item.new}</p>
                <img src={isImg && item.hover !== undefined ? item.hover : item.img}
                    alt="product" className={isImg ? 'trans' : "not"} />


            </div>
            <div className="lists-item-content">
                <p className="item-cate">{item.cate}</p>
                <h6 className="item-title">{item.title}</h6>
                <div className="block-price">
                    <div className={item.prevPrice === undefined ? 'price-none' : 'price-block'}>${item.prevPrice}.00</div>
                    <p className={item.prevPrice === undefined ? 'item-price' : 'item-price price-active'}>${item.price}.00</p>
                </div>
            </div>
            <ul className="item-gr-icon">
                <li onMouseEnter={() => setIsBag(true)}
                    onClick={handlClick}
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

                <li onClick={handleCompare}
                    onMouseEnter={() => setIsCompare(true)}
                    onMouseLeave={() => setIsCompare(false)}
                    id={compareBox ? 'compare-item' : 'none-compare'}
                    className='view'><img src={isCompare ? comparel : compared} alt="detail-icon" />
                </li>

            </ul>
            <ul className="list-tooltip">
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
                    <didv class="tooltip ">
                        <p>Quick View</p>
                    </didv>
                </li>
                <li className={isCompare ? 'compare-true' : 'compare-false'}>
                    <div class="tooltip ">
                        <p>Compare</p>
                    </div>
                </li>
            </ul>

        </div>
        </>

    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        compareFromCart: (id) => dispatch(compareFromCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps)(Item)
