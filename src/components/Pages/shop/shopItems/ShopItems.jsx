import React, { useState, useEffect } from 'react'
import './style.scss'
import { bagg, baglight, eye, eyelight, heart, heartlight, compared, comparel } from '../../../common/icon/index'
import { connect } from 'react-redux'
import { addToCart, loadCurrentItem, compareFromCart } from '../../../../redux/shopping/Shopping-action'
import ShopDetail from '../shopDetail/shopDetail'
import ShopComapre from '../shopCompare/ShopComapre'
import ShopRecommend from '../shopRecommend/ShopRecommend'
import ShopCompareItem from '../shopCompare/ShopCompareItem'
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

// CALL IT ONCE IN YOUR APP
if (typeof window !== "undefined") {
    injectStyle();
}
function ShopItems({ item, addToCart, current, loadCurrentItem, compareFromCart, products, compare }) {

    // Hover changes img,icon
    const [isBag, setIsBag] = useState(false)
    const [isEyes, setIsEyes] = useState(false)
    const [isHeart, setIsHeart] = useState(false)
    const [isCompare, setIsCompare] = useState(false)
    const [detailBox, setDetailBox] = useState(false)
    const [compareBox, setCompareBox] = useState(false)
    const [overlayBox, setOverlayBox] = useState(false)
    const [compareItems, setCompareItems] = useState(true)
    const [word, setWord] = useState('')
    const [filterData,setFilterData] = useState([])

    // Handler Detail
    function handleDetail() {
        setDetailBox(!detailBox)
        loadCurrentItem(item)
    }

    // Handler Compare
    function handleCompare() {
        setCompareBox(!compareBox)
        compareFromCart(item.id)
        setOverlayBox(!overlayBox)
    }

    function handlCompare() {
        setCompareItems(!compareItems)
    }
    function notify() {
        toast.success('successfully!')
    }
    // Handler Filter
    useEffect(() => {
        const newFilter = products.filter((value) => {
            return value.title.toLowerCase().includes(word.toLowerCase())
        })
        setFilterData(newFilter)
    },[word])


  
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
                    onClick={() => { addToCart(item.id); notify() }}
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

            <div className={compareBox ? 'compare__box' : 'none-compare'}>
                <div className="compare__box-wrapper">
                    <div className="content-box">
                        <div className='list-compare' >
                            <ul className='compare-left'>
                                {compare.slice(0, 1).map(item => {
                                    return (
                                        <li>
                                            <ShopComapre
                                                key={item.id}
                                                compareBox={compareBox}
                                                setOverlayBox={setOverlayBox}
                                                overlayBox={overlayBox}
                                                setCompareBox={setCompareBox}
                                                item={item} />
                                        </li>
                                    )
                                })}
                            </ul>
                            <ul className='compare-right'>
                                <li><input type="text" 
                                    onChange={ e => setWord(e.target.value)}
                                    placeholder='Name Product' />
                                    <button>Enter</button>
                                </li>
                                <p className='rec'>Recommend products to compare</p>
                                <div onClick={handlCompare}
                                    className="container-compare shop-container-compare"
                                    id={compareItems ? 'compare-item' : 'none-compare-item'}
                                >
                                    {filterData.map((item) => (
                                        <ShopRecommend item={item} />
                                    ))}
                                </div>
                                <div onClick={handlCompare}>
                                    {compareItems ? null : (<ShopCompareItem />)}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={overlayBox ? 'overlay-compare' : 'none-overlay-compare'}>dsfsdfddsf</div>
                <div className={overlayBox ? 'overlay-compare' : 'none-overlay-compare'}>sdfdsfsdf</div>
            </div>
            {/* Shop Compare */}
            <div className={overlayBox ? 'overlay-compare' : 'none-overlay-compare'}></div>
            {/* Shop Detail */}
            <div className={detailBox ? 'detail__box' : 'none-detail'}>
                {detailBox && <ShopDetail
                    detailBox={detailBox} setDetailBox={setDetailBox}
                    current={current} />}
            </div>
            <ToastContainer autoClose={1200} />
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
        compareFromCart: (id) => dispatch(compareFromCart(id))
    };
};
const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
        compare: state.shop.compare,
        current: state.shop.currentItem,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopItems)
