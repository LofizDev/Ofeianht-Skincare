import React from 'react'
import "aos/dist/aos.css"
import './style.scss'
import {setting5} from '../../common/setting/Setting'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { brand1, brand2, brand3, brand4, brand5 } from '../../common/icon/index'

function BrandSlider() {

  return (
    <div className='brand'>
      <div className='item__slider'>
        <span>Suggestion for You</span>
        <div className="title">
          <h2 data-aos="h3-animation" >Shop by Brands</h2>
        </div>
      </div>
      <div className="brand-slider">
        <Slider {...setting5}>
          <div>
            <img src={brand1} alt="brand" />
          </div>
          <div>
            <img src={brand2} alt="brand" />
          </div>
          <div>
            <img src={brand3} alt="brand" />
          </div>
          <div>
            <img src={brand4} alt="brand" />
          </div>
          <div>
            <img src={brand5} alt="brand" />
          </div>
          <div>
            <img src={brand1} alt="brand" />
          </div>
          <div>
            <img src={brand2} alt="brand" />
          </div>
          <div>
            <img src={brand3} alt="brand" />
          </div>
          <div>
            <img src={brand4} alt="brand" />
          </div>
          <div>
            <img src={brand5} alt="brand" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default BrandSlider
