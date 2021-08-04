import React,{useState,useEffect} from 'react'
import './style.scss'
function ScrollTop() {

    const [scroll,setScroll] = useState(false)

    const toggleSetScroll = () => {
        window.pageYOffset > 250 ? setScroll(true) 
                             : setScroll(false)
                           
    }

    // Scroll top when user click
    const scrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleSetScroll)
        return () => {
            window.removeEventListener('scroll',toggleSetScroll)
        }
    },[])
    return (
            <div onClick={scrollTop} className={scroll ? "show-scroll" : 'hide-scroll'}>
               <span></span>
            </div>
    )
}

export default ScrollTop
