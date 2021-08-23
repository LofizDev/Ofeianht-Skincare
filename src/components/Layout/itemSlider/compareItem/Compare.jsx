import React from 'react'
import { connect } from 'react-redux'
import { removeFromCompare } from '../../../../redux/shopping/Shopping-action'


function Compare({ item, removeFromCompare, setCompareBox, setOverlayBox, overlayBox, compareBox }) {

    // Changes state compareBox, overlayBox
    function handleRemove() {
        setCompareBox(!compareBox)
        setOverlayBox(!overlayBox)
        removeFromCompare(item.id)
    }
    return (
        <div className='compare__product'>
            <div className="compare-img">
                <img src={item.img} alt="compare" />
            </div>
            <div className="compare__product-title">
                <div className="com-ti comm">
                    <p className='ch'>TITLLE:</p>
                    <p className='primary'>{item.title}</p>
                </div>
                <div className="com-pri comm">
                    <p className='ch'>PRICE:</p>
                    <p className='primary price-de'>${item.price}.00</p>
                </div>
                <div style={{marginTop:'10px'}} className="com-des comm">
                    <p className='ch'>DESSCRIPTION:</p>
                    <p className='primary-des'>{item.des}</p>
                </div>
                <div className="com-ku comm">
                    <p className='ch'>SKU:</p>
                    <p className='primary'>{item.sku}</p>
                </div>
                <div className="com-pro ">
                    <p className='ch'>WEIGHT:</p>
                    <p className='ch'>SKIN:</p>
                </div>
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