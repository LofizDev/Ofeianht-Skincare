import React,{useEffect} from 'react'
import ball1 from '../../../assets/images/ball1.png'
import ball2 from '../../../assets/images/ball2.png'
import ball3 from '../../../assets/images/ball3.png'
import introduce from '../../../assets/images/introduce.jpg'
import './style.scss'
import Aos from 'aos'
import "aos/dist/aos.css"

function Introduce() {
    
    useEffect(() => {
        Aos.init({ duration:"900", delay: 230, anchorPlacement:'bottom-bottom' })
      }, [])

    return (
        <div className='introduce'>
            <div className="introduce__wrapper">
                <div className="introduce__wrapper-left">
                    <div className="block-intro">
                        <img className='introduce-img' src={introduce} alt="img" />
                        <img data-aos="fade-right" className='ball1' src={ball1} alt="imgball" />
                        <img data-aos="fade-right"  className='ball2' src={ball2} alt="imgball" />
                        <img  className='ball3' src={ball3} alt="imgball" />
                    </div>
                </div>
                <div className="introduce__wrapper-right">
                    <div className="title-intro">Pure Nature</div>
                    <h4 className="logan-intro">
                        Always formulated <br />
                        for maximum results without  irritation.
                    </h4>
                    <p className="text-intro">
                        We present to your attention a line of premium face creams. New creams contribute to the active production of collagen and hyaluronic acid, therefore, effectively smooth wrinkles. No parabens. No phthalates. No fragrance. Just happy skin.
                    </p>
                    <button id='btn-intro' className='shopnow'>
                        <p>Explore</p>
                        <p>More</p>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Introduce
