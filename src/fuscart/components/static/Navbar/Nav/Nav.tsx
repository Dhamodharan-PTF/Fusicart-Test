import React, { Fragment, useState } from 'react';
import Navlinks from '../Nav/Navlinks.tsx';
import Phone_Icon from '../../../../assets/Phone.png';
import Email_Icon from '../../../../assets/Email.png';
import Wishlist from '../../../../assets/Wishlist.png';
import Cart from '../../../../assets/Cart.png';
import Profile from '../../../../assets/Profile.png';
import Menu from '../../../../assets/Menu.png';
import Logo from '../../../../assets/Logo.png';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the dropdown menu

  const items = [
    {
      id: 0,
      name: 'Cobol',
    },
    {
      id: 1,
      name: 'JavaScript',
    },
    {
      id: 2,
      name: 'Basic',
    },
    {
      id: 3,
      name: 'PHP',
    },
    {
      id: 4,
      name: 'Java',
    },
  ];

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the dropdown menu
  };

  return (
    <Fragment>
      {isMenuOpen && <div className="dropdown-overlay" onClick={toggleMenu}></div>} {/* Black background overlay */}

      <div className="header">
        <div className="top-header row">
          <div className="left col">
            <p>600+ Available Products</p>
            <p>On-time Delivery</p>
          </div>
          <div className="right col">
            <p>
              <img
                src={Phone_Icon}
                alt="Phone Icon"
                style={{ height: '12px' }}
                className="top_icons"
              />
              +91 90250 84185
            </p>
            <p>
              <img
                src={Email_Icon}
                alt="Email Icon"
                style={{ height: '10px', width: '12px' }}
                className="top_icons"
              />
              infoteamptf@gmail.com
            </p>
          </div>
        </div>
        <div className="header-bottom">
          <div className="brand-logo">
            <img src={Logo} alt="Fuescart logo" className="fuscart-logo" />
          </div>
          <div className="bottom-right">
            <div className="search-main">
              <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                formatResult={formatResult}
                styling={{
                  height: '28px',
                  fontSize: '14px',
                  border: '3px solid #c968684e',
                  borderRadius: '12px',
                }}
              />
            </div>
            <div className="nav-main">
              <img src={Wishlist} alt="Wishlist" className="nav-icons-top" />
            </div>
            <div className="nav-main">
              <img src={Cart} alt="Cart" className="nav-icons-top" />
            </div>
            <div className="nav-main">
              <img src={Profile} alt="Profile" className="nav-icons-top" />
            </div>
            <div>
              <div className="nav-menu" onClick={toggleMenu}>
                <img src={Menu} alt="Menu" className="nav-icons-top" />
              </div>
              {isMenuOpen && (
                <div className="dropdown-container">
                  <ul>
                    <li>Profile</li>
                    <li>Orders</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Birthday</li>
                    <li>Flowers</li>
                    <li>Relations</li>
                    <li>Cakes</li>
                    <li>Occasions</li>
                    <li>Plants</li>
                    <li>Themes</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <nav className="nav">
        <ul className="navbar">
          {Navlinks.map((link, index) => (
            <li key={index} className="nav_item">
              <img
                  src={link.icon}
                  alt={`${link.label} icon`}
                  className="nav_icon"
                />
              <a href={link.to} className="nav_link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;
