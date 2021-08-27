
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import './style.scss'
import { gel1,gel2,treeslider,treeslider3,persionslider2,logoslider1,modalslider1,loveyourskintext, partten } from '../../common/icon'
import {ShowNow} from '../../common/button/Button'
import { Link } from "react-router-dom"
import { UrlNames } from "../UrlNames"

function MainSlider() {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        lazyLoad: true,
      };
    return (
        <div className='hero__slider'>
           <Slider {...settings} className='hero__slider-wrapper'>
            {/* Slide 1------------- */}
             <div className='slider-slide1'>
               <div className="circle"></div>
               <div className="slide-left">
                   <div className="content">
                       <img className='gel1' width='295px' src={gel1} alt="slide" />
                       <img className='gel2' width='252px' src={gel2} alt="slide" />
                       <img className='tree' height='67px' src={treeslider} alt="slide" />
                       <img className='tree2' width='150px' src={treeslider} alt="slide" /> 
                       <img className='tree3' width='119px' src={treeslider3} alt="slide" />

                       <ul className='list-social'>
                           <li className='fl'>FOLLOW US</li>
                           <li>FACEBOOK</li>
                           <li>TWITTER</li>
                           <li>PINTEREST</li>
                       </ul>
                   </div>
               </div>
               <div className="slide-center">
                     <div className="text-effect">
                        <h4 className='textef'>Love your skin</h4>
                        <img height='270px' src={loveyourskintext} alt="img" />
                        <Link to={`${UrlNames.SHOP}`}>
                        <ShowNow/>
                        </Link>
                     </div>
                     <img className='logo1' width='820px' src={logoslider1} alt="logoslider" />      
               </div>
               <div className="slide-right">
                 <img className='modalsl1' width='389px' src={modalslider1} alt="img" />
             <img  width='112.82px' className='partten' src={partten} alt="img" />
                 <div className="circle-right"></div>
               </div>
             </div>
             {/* Slider2-------------- */}
             <div className='slider-slide2'>
               <div className="slide2-left">
                 <h4 className='text-sl2'>Natural Cream for <br />Soft Skin</h4>
                 <p  className='text-sl2-p'>Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                 <Link to={`${UrlNames.SHOP}`}>
                 <button>
                   Shop Now <span></span>
                 </button>
                 </Link>
                 <ul className='list-social'>
                           <li className='fl'>FOLLOW US</li>
                           <li>FACEBOOK</li>
                           <li>TWITTER</li>
                           <li>PINTEREST</li>
                </ul>
                <div className="circle-slide2">
                  <div className="circle"></div>
                </div>
               </div>
               <div className="slide2-right">
                  <div className="circle-sl2"></div>
                  <img className='persion-sl2' width='807px' src={persionslider2} alt="img" />
               </div>
              
             </div>
             {/* Slider3------------------ */}
             <div className='slider-slide1' >
               <div className="circle"></div>
               <div className="slide-left">
                   <div className="content">
                       <img className='gel1' width='295px' src={gel1} alt="slide" />
                       <img className='gel2' width='252px' src={gel2} alt="slide" />
                       <img className='tree' height='67px' src={treeslider} alt="slide" />
                       <img className='tree2'  src={treeslider} alt="slide" />
                       <img className='tree3' width='119px' src={treeslider3} alt="slide" />
                       <ul className='list-social'>
                           <li className='fl'>FOLLOW US</li>
                           <li>FACEBOOK</li>
                           <li>TWITTER</li>
                           <li>PINTEREST</li>
                       </ul>
                   </div>
               </div>
               <div className="slide-center">
                     <div className="text-effect">
                        <h4 className='textef'>Love your skin</h4>
                        <img  className='label' height='270px' src={loveyourskintext} alt="img" />
                        <Link to={`${UrlNames.SHOP}`}>
                        <ShowNow/>
                        </Link>
                     </div>
                     <img className='logo1' width='820px' src={logoslider1} alt="logoslider" />      
               </div>
               <div className="slide-right">
                 <img className='modalsl1' width='389px' src={modalslider1} alt="img" />
                 <img width='112.82px' className='partten' src={partten} alt="img" />
                 <div className="circle-right"></div>
               </div>
             </div>
           </Slider>
      </div>
    )
}

export default MainSlider
