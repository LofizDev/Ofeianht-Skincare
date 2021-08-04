
import './style.scss'
import Close from '../../closeIcon/Close'
import { Link } from 'react-router-dom'
import { HeaderData } from '../HeaderData' 
function HeaderMobile({showTab}) {


    return (
        <div className='header__mb-wrapper'>
              <div
                   className={showTab ? 'mb-content mb-active' : 'mb-content'}
               > 
                <Close/>
                <img width='175px' src="http://ofeianht.jwsuperthemes.com/wp-content/uploads/2020/11/Ofeianht-logo-white.svg" alt="logo" />
                <div className="item">
                   <ul>
                      {HeaderData.map((item,index) => (
                          <li key={index} className='header-link-mb'>
                                <Link to={item.path} >{item.title}</Link>
                          </li>
                        ))}
                    </ul>
                </div>
              </div>
        </div>
    )
}

export default HeaderMobile
