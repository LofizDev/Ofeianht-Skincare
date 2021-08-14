import React from 'react'
import './style.scss'
function ParallaxHome() {
    return (
        <div className='parallax' id='parallax-home'>
            <div className="parallax__wrapper">
                <div className="parallax__wrapper-left">
                    <p className='pa-ti-ho'>Book your beauty</p>
                    <h2 className='text-ti-ho'>Let us guide you to your most radiant self</h2>
                    <button id='btn-prl' className='shopnow'>
                        <p>Explore</p>
                        <p>More</p>
                        <span></span>
                    </button>
                </div>
        </div>
    </div>
    )
}

export default ParallaxHome
