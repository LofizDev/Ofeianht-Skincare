import React,{useState} from 'react'
import './style.scss'
import blog1 from '../../../assets/images/skin1.jpg'
import blog2 from '../../../assets/images/skin2.jpg'
import blog3 from '../../../assets/images/skin3.jpg'
import  Close  from '../../common/closeIcon/Close'
import "aos/dist/aos.css"

function Blog() {
    const [box,setBox] = useState(true)


    return (
        <div className='blog'>
            <div className="blog__wrapper">
                <div className="blog__wrapper-header item__slider">
                    <span>Beauty Blog</span>
                    <div className="title">
                        <h2>From the Journal</h2>
                    </div>
                    <div className="viewall">VIEW ALL</div>
                </div>
                <div data-aos="blogs-animation" className="blog__wrapper-post">
                    <div className="post">
                        <div className="post-image">
                            <img src={blog1} alt="blog" />
                        </div>
                        <div className="post-content">
                            <div className="post-date">
                                <span className='day'>5</span>
                                <span className='month'>July</span>
                            </div>
                            <div className="post-title">
                                <h6>BEAUTY TIPS</h6>
                                <h4>Into The Gloss - Beauty Tips, Trends,And Product Reviews</h4>
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="post-image">
                            <img src={blog2} alt="blog" />
                        </div>
                        <div className="post-content">
                            <div className="post-date">
                                <span className='day'>9</span>
                                <span className='month'>May</span>
                            </div>
                            <div className="post-title">
                                <h6>BEAUTY TIPS</h6>
                                <h4>The Biggest Mistake I Made When Starting My Beauty Brand</h4>
                            </div>
                        </div>
                    </div>
                    <div className="post postactive" >
                        <div className="post-image" >
                            <img src={blog3} alt="blog" />
                        </div>
                        <div className="post-content">
                            <div className="post-date">
                                <span className='day'>7</span>
                                <span className='month'>March</span>
                            </div>
                            <div className="post-title">
                                <h6>BEAUTY TIPS</h6>
                                <h4>The best sun scream for all skin types to wear all year round</h4>
                            </div>
                        </div>
                        <div className={box ? 'showbox' : 'closebox'}>
                            <div className="showbox__wrapper">
                                <div className="showbox__wrapper-header">
                                    <h4>JOIN OUR <br /> MAILING LIST</h4>
                                    <span></span>
                                    <h3 className='slogan slogan1'>We dont't keep our beauty secrets.</h3>
                                    <h3 className='slogan slogan2'>Subcribe now and thank us later.</h3>
                                </div>
                                <div className="show__wrapper-bottom">
                                    <input type="text"  placeholder='YOUR EMAIL'/>
                                    <span></span>
                                </div>
                                <div onClick={() => setBox(!box)}  className="close-icon">
                                    <Close/>
                                    
                                </div>
                            </div>
                </div>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Blog
