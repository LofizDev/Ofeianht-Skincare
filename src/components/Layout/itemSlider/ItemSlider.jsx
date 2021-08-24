import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './style.scss'
import Item from './item/Item'
import Slider from "react-slick"
import { settings } from '../../common/setting/Setting'
import "slick-carousel/slick/slick.css"
import Compare from './compareItem/Compare'
import CompareItem from './compareItem/CompareItem'
import Recommend from './recommendBox/Recommend'
// Redux connect
import { connect } from 'react-redux'
import View from './views/View'


// Scroll animation 
function ItemSlider({ products, compare,current }) {

    // Set active category,showBox compare,overLay compare
    const [active, setActive] = useState('makeup')
    const [compareBox, setCompareBox] = useState(false)
    const [overlayBox, setOverlayBox] = useState(false)
    const [compareItems,setCompareItems] = useState(true) 
    const [detailBox,setDetailBox] = useState(false)

    const clickActive = (active) => {
        setActive(active)
    }

    // Scroll animation
    useEffect(() => {
        Aos.init({ duration: 1200 })
    }, [])

    function handlCompare() {
        setCompareItems(!compareItems)
    }

    return (
        <div className='item__slider'>
            <span id='title'>Editor’s Pick Recommendation</span>
            <div className="title">
                <h2 id='title-big' data-aos="fade-down">Best Sellers in Last Week</h2>
            </div>
            <div className="item-tagname">
                <ul>
                    <li onClick={() => clickActive('makeup')}
                        className={active === 'makeup' ? 'tabs active-tabs' : 'tabs'}>
                        MAKE UP
                    </li>
                    <li onClick={() => clickActive('body')}
                        className={active === 'body' ? 'tabs active-tabs' : 'tabs'} >
                        BODY
                    </li>
                    <li onClick={() => clickActive('tool')}
                        className={active === 'tool' ? 'tabs active-tabs' : 'tabs'} >

                        TOOL & BRUSHES
                    </li>
                </ul>
            </div>
            {/* Render Item Slider */}

            <Slider {...settings}>

                {products.filter(item => item.key === active).map((item) => (
                    <div className='list-item-slider'>
                        <Item
                            key={item.id} 
                            item={item}
                            compareBox={compareBox}
                            setOverlayBox={setOverlayBox}
                            overlayBox={overlayBox}
                            setCompareBox={setCompareBox}
                            detailBox={detailBox}
                            setDetailBox={setDetailBox}
                        />
                    </div>
                ))}
            </Slider>

            <div className="view-all">
                <button className='shopnow' id='btn-view'>
                    <p>View</p>
                    <p>all products</p>
                </button>
            </div>
            <div className={compareBox ? 'compare__box' : 'none-compare'}>
                <div className="compare__box-wrapper">
                    <div className="content-box">
                        <div className='list-compare' >
                            <ul className='compare-left'>
                                {compare.slice(0,1).map(item => {
                                    return (
                                        <li>
                                            <Compare
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
                                <li><input type="text" placeholder='Name Product' /><button>Enter</button></li>
                                <p className='rec'>Recommend products to compare</p>
                                <div onClick={handlCompare}
                                     className="container-compare"
                                     id={compareItems ? 'compare-item' : 'none-compare-item'}
                                     >
                                    {products.slice(3, 7).map((item) => (
                                        <Recommend item={item}/>
                                    ))}
                                </div>
                                <div onClick={handlCompare}>
                                     {compareItems ? null: (<CompareItem/>) }
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={overlayBox ? 'overlay-compare' : 'none-overlay-compare'}></div>
                <div className={overlayBox ? 'overlay-compare' : 'none-overlay-compare'}></div>
            </div>
            {/* Detail Item */}
            <div className={detailBox ? 'detail__box' : 'none-detail'}>
                {detailBox && <View  detailBox={detailBox} setDetailBox={setDetailBox}  current={current} /> }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
        compare: state.shop.compare,
        current: state.shop.currentItem,
    };
};

export default connect(mapStateToProps)(ItemSlider)
