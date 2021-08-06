import React from 'react'
import './style.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { brand1, brand2, brand3, brand4, brand5 } from '../../common/icon/index'

function BrandSlider() {
    const settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className='brand'>
            <div className='item__slider'>
                <span>Suggestion for You</span>
                <div className="title">
                    <h2>Shop by Brands</h2>
                </div>
            </div>
            <div className="brand-slider">
            <Slider {...settings}>
          <div>
            <img src={brand1} alt="" />
          </div>
          <div>
          <img src={brand2} alt="" />
          </div>
          <div>
          <img src={brand3} alt="" />
          </div>
          <div>
          <img src={brand4} alt="" />
          </div>
          <div>
          <img src={brand5} alt="" />
          </div>
          <div>
          <img src={brand1} alt="" />
          </div>
          <div>
          <img src={brand2} alt="" />
          </div>
          <div>
          <img src={brand3} alt="" />
          </div>
          <div>
          <img src={brand4} alt="" />
          </div>
          <div>
          <img src={brand5} alt="" />
          </div>
        </Slider>
            </div>
        </div>
    )
}

export default BrandSlider
