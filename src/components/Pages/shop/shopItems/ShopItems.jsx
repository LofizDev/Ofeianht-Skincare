import React from 'react'
import './style.scss'

function ShopItems({item}) {
    return (
        <div className='single-item'>
           <div className="single-item-img">
           <img src={item.img} className='pro-im' alt="product" />
           </div>
            <div className="single-content">
                <p className='single-cate'>{item.cate}</p>
                <p className='single-tt'>{item.title}</p>
                <div className="gr-pri">
                {item?.prevPrice && <p className='remove-pr'>${item.prevPrice}.00</p>  }
                <p className='single-pr'
                   id={item?.prevPrice ? 'single-active' : 'no-single'}
                >${item.price}.00</p>
                </div>
            
            </div>
        </div>

    )
}

export default ShopItems
