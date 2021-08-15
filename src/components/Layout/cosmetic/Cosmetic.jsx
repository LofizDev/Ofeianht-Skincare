import React,{useEffect,useState} from 'react'
import cos from '../../../assets/images/cos-img.png'
import './style.scss'
import Circle from '../../common/circle-animation/Circle'
function Cosmetic() {

    const [offsetY,setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    },[])


    return (
        <div className='cosmetic'>
            <div className="cos-ttle">
                <span>About Us</span>
                <p>Natural Cosmetic Brand</p>
            </div>
            <div className="cosmetic__wrapper">
                <div className="cosmetic__wrapper-left">
                    <div className="cos-left-content">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ width: '23px', height: '23px' }} fill="#9D9894" viewBox="0 0 508.044 508.044" xmlSpace="preserve">
                        <path d="M0.108,352.536c0,66.794,54.144,120.938,120.937,120.938c66.794,0,120.938-54.144,120.938-120.938    s-54.144-120.937-120.938-120.937c-13.727,0-26.867,2.393-39.168,6.61C109.093,82.118,230.814-18.543,117.979,64.303    C-7.138,156.17-0.026,348.84,0.114,352.371C0.114,352.426,0.108,352.475,0.108,352.536z"></path>
                        <path d="M266.169,352.536c0,66.794,54.144,120.938,120.938,120.938s120.938-54.144,120.938-120.938S453.9,231.599,387.106,231.599    c-13.728,0-26.867,2.393-39.168,6.61C375.154,82.118,496.875-18.543,384.04,64.303C258.923,156.17,266.034,348.84,266.175,352.371    C266.175,352.426,266.169,352.475,266.169,352.536z"></path>
                    </svg>
                    <h6 className='cos-title'>
                        PRETIUM LECTUS QUAM ID LEO IN. IPSUM DOLOR SIT AMET CONSECTETUR. FEUGIAT IN ANTE METUS DICTUM. AUCTOR ELIT SED VULPUTATE MI SIT AMET MAURIS.
                    </h6>
                    <img src={cos} alt="cosmetic" />
                </div>
                    <div className="cos-img">
                        <img className='img-cos-le' src="http://ofeianht.jwsuperthemes.com/wp-content/uploads/2020/10/imghome-3.jpg" alt="cosmetic" />
                        <img  height='146px' src="http://ofeianht.jwsuperthemes.com/wp-content/uploads/elementor/thumbs/texture-5sl-otvu1sbiatziihf28e4hh4k4nyfp6064hhmspwr5kk.png" alt="cosmetic" />
                    </div>
                    <div className="cos-span">
                        Crated with <br /> the Ofeianht Spirit
                    </div>
                    </div>
                <div className="cosmetic__wrapper-right">
                    <div className="cos-img-right">
                        <img  style={{transform:`translateY(${offsetY * -0.2}px)`}} src="http://ofeianht.jwsuperthemes.com/wp-content/uploads/2020/10/lemonbitters.jpg" alt="cosmetic" />
                        <Circle/>
                    </div>
                    <div className="cos-text">
                        Suspendisse faucibus interdum posuere lorem ipsum. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Non nisi est sit amet facilisis magna etiam tempor. Cras semper auctor neque vitae tempus quam pellentesque. Orci eu lobortis elementum nibh tellus molestie nunc.
                    </div>
                    <img className='img-ri-cos' style={{marginTop:'20px'}} src="http://ofeianht.jwsuperthemes.com/wp-content/uploads/elementor/thumbs/partten-9-otupn571o10x9zz6wwi8otaf15jrpuwknv4v0c4qw8.png" alt="cosmetic" />
                </div>
            </div>
        </div>
    )
}

export default Cosmetic
