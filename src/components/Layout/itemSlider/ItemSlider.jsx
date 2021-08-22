import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './style.scss'
import Item from './item/Item'
import Slider from "react-slick"
import { settings } from '../../common/setting/Setting'
import "slick-carousel/slick/slick.css"
// Redux connect
import { connect } from 'react-redux'



// Scroll animation 
function ItemSlider({ products, compare }) {

    // Set active category,showBox compare,overLay compare
    const [active, setActive] = useState('makeup')
    const [compareBox, setCompareBox] = useState(false)
    const [overlayBox,setOverlayBox] = useState(false)


    const clickActive = (active) => {
        setActive(active)
    }

    // Scroll animation
    useEffect(() => {
        Aos.init({ duration: 1200 })
    }, [])

    // Changes state compareBox,overlayBox
    function handleRemove() {
        setCompareBox(!compareBox)
        setOverlayBox(!overlayBox)
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
                          setCompareBox={setCompareBox} 
                          compareBox={compareBox}
                          setOverlayBox={setOverlayBox}
                          overlayBox={overlayBox} 
                          key={item.id} item={item}
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
                        <ul>
                            {compare.map(item => {
                                return (
                                    <>
                                        <li>{item.title}</li>
                                        <li>{item.price}</li>
                                        <li>ADD TO CART</li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <p onClick={handleRemove}>CLOSE</p>
                </div>
                <div className="overlay-compare"></div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
        compare: state.shop.compare
    };
};

export default connect(mapStateToProps)(ItemSlider)
