import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HeaderData } from './HeaderData'
import './style.scss'
import { user, bag, menu, search, PinterestIcon, TwitterIcon, InstagramIcon, FacebookIcon, pic1, pic2, pic3, pic4, pic5, pic6 } from '../icon/index'
import Close from '../closeIcon/Close'
import HeaderMobi from '../header/headerMobile/HeaderMobile'

function Header() {
    // Toggle show searchBox,sideBar
    const [searchBox, setSearchBox] = useState(false)
    const [sideBarToggle, setSideBarToggle] = useState(false)
    const [showTab, setShowTab] = useState(false)
    const [show, setShow] = useState(false)
    const [currentPos, setCurrentPos] = useState(null)
    const previousPos = usePrevious(currentPos)
    
    // Scroll changes add and clean events
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    // Custom Hook save Position previous
    function usePrevious(value) {
        const ref = useRef()
        useEffect(() => {
            ref.current = value
        }, [value])
        return ref.current
    }

    // Get current value Position
    const handleScroll = () => {
        const currentPos = document.body.getBoundingClientRect().top
        setCurrentPos(currentPos)
    }

    useEffect(() => {
        setShow(currentPos > previousPos ? true : false)
    }, [currentPos])


    return (
        <header className='header-container'>
            <div
             className={show ? 'header__wrapper active-scroll' : 'header__wrapper'} 
             id={window.scrollY > 50 && !show ? 'no-active' : ''}
             >
                {/* Header left */}
                <div className="wrapper-left">
                    <ul>
                        {HeaderData.map((item, index) => (
                            <li key={index} className='header-link'>
                                <Link to={item.path} >{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Header logo */}
                <div className="wrapper-logo">
                    <img width='180px' src="http://ofeianht.jwsuperthemes.com/wp-content/uploads/2020/08/Ofeianht-logo-oficial.svg" alt="logo" />
                </div>
                {/* Header right */}
                <div className="wrapper-right">
                    <ul>
                        <li className='user'><span>ACCOUNT</span><img style={{ marginLeft: '5px' }} height='12.3px' src={user} alt="user" /></li>
                        <li className='cart'><span>CART</span><img className='icon-cart' style={{ marginLeft: '6px' }} width='14px' src={bag} alt="search" /></li>
                        <li className='search'><img onClick={() => setSearchBox(!searchBox)} width='16px' src={search} alt="search" /></li>
                        <li onClick={() => setSideBarToggle(!sideBarToggle)} className='sb-icon'>
                            <img width='16px' src={menu} alt="bar" />
                        </li>
                        {/* Header Mobile */}
                        <li onClick={() => setShowTab(!showTab)} className="header-mb">
                            <img width='16px' src={menu} alt="bar" />
                            <div className={showTab ? 'header-mb-wp active-sb-mb' : 'header-mb-wp'}>
                                <HeaderMobi />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/*Header-right SearchBox */}
            <div className={searchBox ? 'search-open' : 'search-close'} >
                <div className="wrapper">
                    <ul>
                        <li>ALL</li>
                        <li>MAKE UP</li>
                        <li>BODY</li>
                        <li>LIPSTICK</li>
                        <li>TOOL &BRUSHES</li>
                    </ul>
                    <input type="text" placeholder='Type your search here' />
                    <h5>Enter your search & hit enter</h5>

                    <div onClick={() => setSearchBox(!searchBox)} class="close-container">
                        <div class="leftright"></div>
                        <div class="rightleft"></div>
                        <label class="text-close">close</label>
                    </div>
                </div>
            </div>
            {/* Sidebar */}

            <div className={sideBarToggle ? 'sidebar sb-active' : 'sidebar'}>
                <div className="siderbar__wrapper">
                    <div className="siderbar__wrapper-text">
                        <div onClick={() => setSideBarToggle(!sideBarToggle)} className="cls" ><Close /></div>
                        <img width='147px' src='http://ofeianht.jwsuperthemes.com/wp-content/uploads/2020/08/Ofeianht-logo-oficial.svg' alt="logo" />
                        <p>Autem dicant cum ex, ei vis nibh solum simul, veritus fierent fastidii quo ea. Cu solum scripta pro. Qui in clita everti propriae, vidit voluptaria cum ne, at nec sint movet</p>
                    </div>
                    <div className="sidebar__wrapper-btn">
                        <div className="fb-icon"><FacebookIcon /></div>
                        <div className="fb-twitter"><TwitterIcon /></div>
                        <div className="fb-instagram"><InstagramIcon /></div>
                        <div className="fb-pinterest"><PinterestIcon /></div>
                    </div>
                    <div className="sider__wrapper-img">
                        <img className='pic1' src={pic1} alt="img" />
                        <img className='pic2' src={pic4} alt="img" />
                        <img className='pic3' src={pic2} alt="img" />
                        <img className='pic4' src={pic6} alt="img" />
                        <img className='pic5' src={pic5} alt="img" />
                        <img className='pic6' src={pic3} alt="img" />
                        <div className="text">
                            <span>Beautifull Natural</span>
                        </div>
                    </div>
                    <p className='coppy' style={{ letterSpacing: '.3px' }}>© 2021 – <span style={{ color: '#161619', fontWeight: 600 }}>Ofeianht</span>. All rights reserved.</p>
                </div>
            </div>
           {/* Overlay PC*/}
            <div  onClick={() => setSideBarToggle(!sideBarToggle)} className={sideBarToggle ? 'overlay-active' : 'overlay-none'}></div>
        {/* OverLay Moblie */}
            <div onClick={() => setShowTab(!showTab)} className={showTab ? 'overlay-mb-active' : 'over-mb-none'}></div>
        </header>
    )
}

export default Header
