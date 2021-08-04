import React,{useState,useEffect,useRef} from 'react'
import './style.scss'
import '../../common/grid-responsive/grid.scss'
import flashSale from '../../../assets/images/flase-sale.jpg'
import '../../common/button/Button.scss'
import Circle from '../../common/circle-animation/Circle'
function CountDown() {

    const [timerDays,setTimerDays] = useState('00')
    const [timerHours,setTimerHours] = useState('00')
    const [timerMinutes,setTimerMinutes] = useState('00')
    const [timerSeconds,setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('February 30, 2022 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 *60 *24) / (1000 * 60 *60)))
            const minutes = Math.floor((distance % (1000 * 60 *60 )) / (1000 * 60 ))
            const seconds = Math.floor((distance % (1000 * 60)) /1000)
            
            if(distance < 0) {
                // Stop our timer
                clearInterval(interval.current)
            } else {
                // Update timer
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        }, 1000);
    }
    

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    })
    return (
        <div className='countdown'>
            <div className="countdown__left countdown-item">
                <div className="countdown__left-image">
                    <img src={flashSale} alt="flashSale" />
                    <Circle/>
                </div>
            </div>
                <div className="countdown__right countdown-item">
                    <div className="countdown__right-content">
                        <span className='title-span'>Flash sale</span>
                        <h5 className="title">Charming Shower Gel</h5>
                        <p>COME FROM USA</p>
                        <div className="count-group">
                        <div className="count-circle">
                            <h6>{timerDays}</h6>
                            <span className='times'>Days</span>
                        </div>
                        <div className="count-circle">
                            <h6>{timerHours}</h6>
                            <span className='times'>Hours</span>
                        </div>
                        <div className="count-circle">
                            <h6>{timerMinutes}</h6>
                            <span className='times'>Minutes</span>
                        </div>
                        <div className="count-circle">
                            <h6>{timerSeconds}</h6>
                            <span className='times'>Secons</span>
                        </div>
                        </div>
                        <div className="count-price">
                            <h5>40.00</h5>
                            <button className='shopnow'>
                                <p>Buy</p>
                                <p>Now</p>
                                <span></span>
                            </button>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default CountDown
