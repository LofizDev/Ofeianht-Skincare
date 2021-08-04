import React from 'react'
import './style.scss'
import {banner1,banner2,banner3,banner4,banner5,banner6} from '../../common/icon/index'
import '../../common/grid-responsive/grid.scss'
function Banner() {
    return (

        <div className="grid  banner">
            <div className="row no-gutters">
                <div className="col l-6 m-12 c-12 item item1">
                   <div className="block">
                     <img src={banner1} alt="banner" />
                   </div>
                    <div className="content-shared">
                        <h4>Cometic time</h4>
                        <h5 className='h5-shared'>TRUE NATURAL</h5>
                        <h2 className='sale-of'>30% <span>off</span></h2>
                        <button>MEMBER ONLY</button>
                    </div>
                </div>
                <div className="col l-3 m-6 c-12 item item2">
                    <img src={banner2} />
                </div>
                <div className="col l-3 m-6 c-12 item item3">
                    <div className="block">
                      <img src={banner3} />
                    </div>
                    <div className='content2'>
                        <label >SERUM  &ensp;<br />&ensp; COLECTION</label>
                    </div>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col l-3 m-6 c-12 item item4">
                    <div className="block">
                      <img src={banner4} />
                    </div>
                    <div className='content4'>
                         <label >MAKE UP  &ensp;<br />&ensp; COLECTION</label>
                    </div>
                </div>
                <div  className="col l-6 m-12 c-12 item item5">
                    <div className="block">
                    <img src={banner5} />
                    </div>
                    <div className='content5'>
                         <label >PREMIUM  &ensp;<br />&ensp; COLECTION</label>
                    </div>
                    <div className="content-shared">
                        <h4>Cometic time</h4>
                        <h5 className='h5-shared'>TRUE NATURAL</h5>
                        <h2 style={{color:'black'}} className='sale-of'>30% <span>off</span></h2>
                    </div>
                </div>
                <div className="col l-3 m-6 c-12 item item6">
                    <div className="block">
                       <img src={banner6} />
                    </div>
                    <div className='content6'>
                         <label >FERFUME  &ensp;<br />&ensp; NEW ARRIVAL</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
