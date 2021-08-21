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
function ItemSlider({ products }) {

    // Set active category
    const [active, setActive] = useState('makeup')

    const clickActive = (active) => {
        setActive(active)
    }

    // Scroll animation
    useEffect(() => {
        Aos.init({ duration: 1200 })
    }, [])


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
                        <Item key={item.id} item={item} />
                    </div>
                ))}

            </Slider>

            <div className="view-all">
                <button className='shopnow' id='btn-view'>
                    <p>View</p>
                    <p>all products</p>
                </button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    };
};;

export default connect(mapStateToProps)(ItemSlider)
