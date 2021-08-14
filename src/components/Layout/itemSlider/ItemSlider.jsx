import React , {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './style.scss'


function ItemSlider() {
    useEffect(() => {
        Aos.init({duration : 1500})
    },[])
 
    return (
        <div className='item__slider'>
            <span>Editor’s Pick Recommendation</span>
            <div className="title">
                <h2 data-aos="fade-down">Best Sellers in Last Week</h2>
            </div>
        </div>
    )
}

export default ItemSlider
