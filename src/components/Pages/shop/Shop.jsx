import React, { useState, useEffect } from 'react'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
import './style.scss'
import Parralax from '../../common/parallax/Parallax'
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux'
import ShopItems from './shopItems/ShopItems'
import sidebarimg from '../../../assets/images/shopsidebar.jpg'
function Shop({ products }) {

    const [visible, setVisible] = useState(12)
    const [toggleCate, setToggleCate] = useState(false)

    // Return Unique value
    const unique = [...new Set(products.map((item => item.cate)))]

    // Show more Item
    function showMoreItems() {
        setVisible((prevValue) => prevValue + 12)
    }
    const [sorts, setSorts] = useState('all');
    const sorting = (e) => {
        const selected = e.target.value;
        products.sort((a, b) => {
            if (selected === 'all') {
                return a.id > b.id ? 1 : -1;
            }
            if (selected === 'low') {
                return a.price > b.price ? 1 : -1;
            }
            if (selected === 'hight') {
                return a.price < b.price ? 1 : -1;
            }
        });
        setSorts(selected);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <Header />
            <div className='shop__page'>
                <div className="shop__page-wrapper">
                    <div className="shop-wrapper-banner">
                        <h2 className='title-banner'>SHOP</h2>
                        <p className='text-banner'>What we belive.The truth about clean beauty</p>
                    </div>
                    <div className="shop-wrapper-content">
                        <div className="shop-content-left">
                            <p className='filter-title'>FILTER BY</p>
                            <div className="categories">
                                <div className="title-cate">
                                    <p className='text-cate'>Categories</p>
                                    <p onClick={() => setToggleCate(!toggleCate)}
                                        className='toggle-icon'
                                        id={toggleCate ? 'toggle-hide' : 'toggle-show'}>
                                    </p>
                                </div>
                                <ul id={toggleCate ? 'hideList' : 'showList'} className="list-item-cate">
                                    {unique.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="shop-search">
                                <p className='sss'>Search</p>
                                <div className="search-gr">
                                    <input type="text" placeholder='Search products...' />
                                    <button><SearchIcon /></button>
                                </div>
                            </div>
                            <div className="best-sell">
                                <p className='sss' style={{marginBottom:'20px'}}>Best Seller</p>
                                {products.slice(6, 9).map((item) => (
                                    <div className="best-sell-item">
                                        <div className="best-img"><img src={item.hover} alt="sellter" /></div>
                                        <div className="best-content">
                                            <p className='ct-b'>{item.cate}</p>
                                            <p className='tt-b'>{item.title}</p>
                                            <p className='pr-b'>${item.price}.00</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="sidebar-img">
                                <img src={sidebarimg} alt="imgsidebar" />
                            </div>
                        </div>
                        <div className="shop-content-right">
                            <div className="show-sort">
                                <p className="showing">
                                    Showing <strong>1-16</strong>  of <strong> 72</strong> Product
                                </p>
                                <p className="sortby">
                                    <select onChange={sorting}>
                                        <option value="all">Sort by lastest</option>
                                        <option value="low">Sort by price: low to hight</option>
                                        <option value="hight">Sort by price: hight to low</option>
                                    </select>
                                </p>
                            </div>
                            <div style={{ marginTop: '1px' }} className="show-products">
                                {products.slice(0, visible).map((item) => (
                                    <ShopItems item={item} />
                                ))}
                            </div>
                            {visible >= 31
                                ? <p className='loadmore loaded'>All Products Loaded.</p>
                                : <button className='loadmore btn-load' onClick={showMoreItems}>Load more</button>}
                        </div>
                    </div>
                </div>
            </div>
            <Parralax />
            <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products,
    }
}

export default connect(mapStateToProps)(Shop)
