import React from 'react'
import './style.scss'
function Parallax() {
    return (
        <div className='parallax'>
            <div className="parallax__overlay">
                <div className="parallax__wrapper">
                    <div className="parallax__wrapper-left">
                        <h4>Is your ticket <br /> to a world of beauty</h4>
                    </div>
                    <div className="parallax__wrapper-right">
                        <input type="text" placeholder='Enter your email address' />
                        <button>Join Now !</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parallax
