import React from 'react'
import { connect } from 'react-redux'
import { removeFromCompare } from '../../../../redux/shopping/Shopping-action'


function Compare({ item, removeFromCompare,setCompareBox,setOverlayBox,overlayBox,compareBox }) {

    // Changes state compareBox, overlayBox
    function handleRemove() {
        setCompareBox(!compareBox)
        setOverlayBox(!overlayBox)
        removeFromCompare(item.id)
    }
    return (
        <div className='compare__product'>
            <div className="compare-img">
                <p className='remove-compare'>Remove</p>
                <img src={item.img} alt="compare" />
            </div>
            <div className="compare__product-title">
                <p>{item.title}</p>
                <p>${item.price}.00</p>
            </div>
            <div onClick={handleRemove} className="overdelete">
                CLOSE
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCompare: (id) => dispatch(removeFromCompare(id)),

    }
}
export default connect(null, mapDispatchToProps)(Compare)