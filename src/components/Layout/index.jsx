import React, { useEffect } from 'react'
import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'
import Parallax from '../common/parallax/Parallax'
import MainSlider from '../Layout/mainSlider/MainSlider'
import Banner from './banner/Banner'
import Blog from './blog/Blog'
import BrandSlider from './brandSlider/BrandSlider'
import CountDown from './countDown/CountDown'
import GiftHoliday from './giftHoliday/GiftHoliday'
import Introduce from './introduce/Introduce'
import ItemSlider from './itemSlider/ItemSlider'
import ParallaxHome from './parallaxHome/ParallaxHome'
function Index() {
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    return (
        <div>
            <Header/>
            <MainSlider/>
            <Banner/>
            <ItemSlider />
            {/* <Introduce/> */}
            <ParallaxHome/>
            <BrandSlider/>
            <GiftHoliday/>
            <CountDown/>
            <Blog/>
            <Parallax/>
            <Footer/>
        </div>
    )
}

export default Index
