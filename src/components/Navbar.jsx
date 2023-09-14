import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from "../../public/images/amazon_logo.png"

export default function Navbar(){
    return (

        (
            <header className="navbar">
                <div className="nav--logo">
                  <Link to="/">
                  <div className='logo'>
                    <img src={logo} />
                  </div>
                  </Link>
                </div>

                <div className='languages'>
                  <div className='languages--icon'>
                    <div>
                        <FontAwesomeIcon icon={ faGlobe } className='globe' />
                    </div>
                  </div>
                    <div>
                      <select className='lang'>
                          <option>English</option>
                      </select>
                    </div>
                </div>
    
                <div className="search">
                <select className='items'>
                  <option>All</option>
                </select>
                    <input type='text' placeholder="Search Amazon.in" className='search--bar'/>
                      <div className='icon--container'>
                        <FontAwesomeIcon icon={ faMagnifyingGlass } className='search--icon' />
                      </div>
                </div>

                <Link to="/signin">
                <div className="login">
                    <div>Hello, there</div>
                    <div><strong>Accounts & Login</strong></div>
                </div>
                </Link>

                <div className="cart">
                  <Link to="/checkout">
                  <div>
                      <FontAwesomeIcon icon={faCartShopping} className='cart--img'/>
                      <span className='cart--number'>0</span>
                  </div>
                    <span className='cart--text'>Cart</span>
                  </Link>
                </div>
            </header>
        )
    )
}