import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './style.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { brand1, brand2, brand3, brand4, brand5 } from '../../common/icon/index'

function BrandSlider() {
  const settings = {
    dots: false,
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

  useEffect(() => {
    Aos.init({ offset: 20, delay: 480 })
  }, [])
  return (
    <div className='brand'>
      <div className='item__slider'>
        <span>Suggestion for You</span>
        <div className="title">
          <h2 data-aos-offset="200"
            data-aos-duration="1000"

            data-aos-anchor-placement="center"
            data-aos="fade-down">Shop by Brands</h2>
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
