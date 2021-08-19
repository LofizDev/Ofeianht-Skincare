import React,{useState} from 'react'
import bag from '../../../../assets/images/bagdk.png'
import baglight from '../../../../assets/images/baglight.png'
import eye from '../../../../assets/images/eyess.png'
import eyelight from '../../../../assets/images/eyelight.png'
import heart from '../../../../assets/images/heart-dark.png'
import heartlight from '../../../../assets/images/heartlight.png'
//Redux connect
import { addToCart } from '../../../../redux/shopping/Shopping-action'
import { connect } from 'react-redux'


function Item({ item,addToCart }) {

    // Hover changes img
    const [isBag,setIsBag] = useState(false)
    const [isEyes,setIsEyes] = useState(false)
    const [isHeart,setIsHeart] = useState(false)
    

    return (
        <div id='item-slider'>
            <div className="lists-item-img">
                <img src={item.img} alt="" />
            </div>
            <div className="lists-item-content">
                <p className="item-cate">{item.cate}</p>
                <h6 className="item-title">{item.title}</h6>
                <p className="item-price">${item.price}.00</p>
            </div>
            <ul className="item-gr-icon">
                <li onMouseEnter={() => setIsBag(true)} 
                    onMouseLeave={() => setIsBag(false)}
                    className='add'><img src={isBag ? baglight : bag} alt="bag-icon" />
                </li>
                <li onMouseEnter={() => setIsHeart(true)}
                    onMouseLeave={() => setIsHeart(false)} 
                    className='love'><img src={isHeart ? heartlight : heart} alt="heart-icon" />
                </li>
                <li onMouseEnter={() => setIsEyes(true)}
                    onMouseLeave={() => setIsEyes(false)}
                    className='view'><img src={isEyes ? eyelight : eye} alt="detail-icon" />
                </li>
            </ul>
            {/* <button onClick={() => addToCart(item.id)}>add to cart</button>
            <button>view item</button> */}
        </div>
    )
}
 const  mapDispatchToProps = (dispatch) => {
     return {
         addToCart: (id) => dispatch(addToCart(id)),
     }
 }
 

export default connect(null, mapDispatchToProps)(Item)
