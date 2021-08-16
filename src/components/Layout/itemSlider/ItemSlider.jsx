import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './style.scss'
import Item from './item/Item'

// Redux connect
import { connect } from 'react-redux'


// Scroll animation 
function ItemSlider({ products }) {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
console.log(products)
    return (
        <div className='item__slider'>
            <span>Editor’s Pick Recommendation</span>
            <div className="title">
                <h2 data-aos="fade-down">Best Sellers in Last Week</h2>
            </div>
            {products.map((item) => (
                <Item productData={item} />
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(ItemSlider)
