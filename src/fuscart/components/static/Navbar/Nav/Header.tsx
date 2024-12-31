import React from 'react'
import Phone_Icon from '../../../../assets/Phone.png';
import Email_Icon from '../../../../assets/Email.png';
import Logo from '../../../../assets/Logo.png';
import Location from '../../../../assets/Location.png';
import Search from '../../../../assets/Search.png';
import Wishlist from '../../../../assets/Wishlist.png';
import Cart from '../../../../assets/Cart.png';
import Profile from '../../../../assets/Profile.png';
import Menu from '../../../../assets/Menu.png';


const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <div className="top-header row">
          <div className="left col">
            <p>600+ Available Products</p>
            <p>On-time Delivery</p>
          </div>
          <div className="right col">
            <p><img src={Phone_Icon} alt="Phone Icon" style={{ height: '12px' }} className='top_icons' />+91 90250 84185</p>
            <p><img src={Email_Icon} alt="Email Icon" style={{ height: '10px', width: '12px' }} className='top_icons' />infoteamptf@gmail.com</p>
          </div>
        </div>
        <div className="header-bottom row">
          <div className="brand_logo col">
            <img src={Logo} alt="Fuscart Logo" className='Fuscart_logo' />
          </div>
          <div className="bottom-left col">
            <div className="location">
              <img src={Location} alt="Fuscart Logo" style={{ height: '14px', width: '12px' }} className='top_icons' />
              <p>Coimbatore</p>
            </div>
            <div className="search-bar">
              <input
                type="search"
                name="search"
                id="search"
                className="search"
                placeholder="Search"
              />
              <img
                src={Search}
                alt="Search Icon"
                className="search_icon"
              />
            </div>
            <div className="wishlist">
              <img
                src={Wishlist}
                alt="Wishlist Icon"
                style={{ height: '14px', width: '16px', cursor: 'pointer' }}
                className="wishlist_icon"
              />
            </div>
            <div className="cart">
              <img
                src={Cart}
                alt="cart Icon"
                style={{ height: '16px', width: '16px', cursor: 'pointer' }}
                className="cart_icon"
              />
            </div>
            <div className="profile">
              <img
                src={Profile}
                alt="profile Icon"
                style={{ height: '16px', width: '14px', cursor: 'pointer' }}
                className="profile_icon"
              />
            </div>
            <div className="menu">
              <img
                src={Menu}
                alt="menu Icon"
                style={{ height: '14px', width: '16px', cursor: 'pointer' }}
                className="menu_icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header