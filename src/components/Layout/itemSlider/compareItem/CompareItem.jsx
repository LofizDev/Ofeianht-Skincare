import React from 'react'
// Redux
import { connect } from 'react-redux';

function CompareItem({ compare }) {
    return (
        <div className='compare-show-itemss'>
            {compare.slice(1, 2).map((item) => (
                <>
                    <img width='175px' src={item.hover} alt="compare" />
                    <p >{item.title}</p>
                    <p style={{ textDecoration: 'underline', marginTop: '7px', fontWeight: '600', fontSize: '15px' }}>${item.price}.00</p>
                    <p style={{ lineHeight: '28px', marginTop: '11px' }}>{item.des}</p>
                    <p style={{ margin: '5px 0' }}>{item.sku}</p>
                </>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        compare: state.shop.compare
    };
};

export default connect(mapStateToProps)(CompareItem)
