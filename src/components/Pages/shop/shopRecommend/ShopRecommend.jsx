import React from 'react'
// Redux
import { compareFromCart } from '../../../../redux/shopping/Shopping-action'
import { connect } from 'react-redux'

function Recommend({ item ,compareFromCart}) {
    return (
        <div onClick={() => compareFromCart(item.id)} className="item-compare">
            <img width='90px' src={item.hover} alt="compare" />
            <p>{item.title}</p>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        compareFromCart: (id) => dispatch(compareFromCart(id)),   
    }
}
export default connect(null,mapDispatchToProps)(Recommend)
