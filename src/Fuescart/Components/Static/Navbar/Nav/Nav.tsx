import React, { Fragment, useState } from 'react';
import Navlinks from '../Nav/Navlinks';
import Phone_Icon from '../../../../Assets/Phone.png';
import Email_Icon from '../../../../Assets/Email.png';
import Wishlist from '../../../../Assets/Wishlist.png';
import Cart from '../../../../Assets/Cart.png';
import Profile from '../../../../Assets/Profile.png';
import Order from '../../../../Assets/Order.png';
import Menu from '../../../../Assets/Menu.png';
import Search from '../../../../Assets/Search.png';
import Logo from '../../../../Assets/Logo.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define dropdown menu items
const dropdownMenuItems = [
  { label: 'Profile', to: '/Profile', icon: Profile },
  { label: 'Orders', to: '/Orders', icon: Order },
  { label: 'Cart', to: '/Cart', icon: Cart },
  { label: 'Wishlist', to: '/Wishlist', icon: Wishlist },
  { label: 'Birthday', to: '/Birthday', icon: null },
  { label: 'Flowers', to: '/Flowers', icon: null },
  { label: 'Relations', to: '/Relations', icon: null },
  { label: 'Cakes', to: '/Cakes', icon: null },
  { label: 'Occasions', to: '/Occasions', icon: null },
  { label: 'Plants', to: '/Plants', icon: null },
  { label: 'Themes', to: '/Themes', icon: null },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the dropdown menu
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the dropdown menu
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // Update search query state
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery); // Replace this with the actual search functionality
  };

  // Function to render dropdown menu items
  const renderDropdownMenu = () => (
    <ul>
      {dropdownMenuItems.map((item, index) => (
        <li key={index}>
          {item.icon && (
            <img
              src={item.icon}
              alt={`${item.label} icon`}
              className="dropdown-icon"
              style={{ marginRight: '8px' }}
            />
          )}
          <a href={item.to}>{item.label}</a>
        </li>
      ))}
    </ul>
  );


  const copyToClipboard = (text:any) => {
    navigator.clipboard.writeText(text).then(() => {
      toast('Phone number copied to clipboard!');
    }).catch((error) => {
      console.error('Failed to copy text: ', error);
    });
  };

  const openEmailClient = (email:any) => {
    window.location.href = `mailto:${email}`;
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
          <p
        onDoubleClick={() => copyToClipboard('+91 90250 84185')}
        style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate interactivity
      >
              <img
                src={Phone_Icon}
                alt="Phone Icon"
                style={{ height: '12px' }}
                className="top_icons"
              />
              +91 90250 84185
            </p>
            <p
        onDoubleClick={() => openEmailClient('infoteamptf@gmail.com')}
        style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate interactivity
      >
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
            <a href="/">
            <img src={Logo} alt="Fuescart logo" className="fuscart-logo" />
            </a>
          </div>
          <div className="bottom-right">
            {/* Search Bar Container */}
            <div className="nav-search search-container">
              <form onSubmit={handleSearchSubmit} className="search-bar">
                <img
                  src={Search}
                  alt="Search Icon"
                  className="search-icon"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  className="search-input"
                />
              </form>
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
                  <div className='Fuscart-menu'>Fuescart menu</div>
                  {renderDropdownMenu()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <nav className="nav">
        <ul className="navbar">
          {Navlinks.map((link: any, index: any) => (
            <li key={index} className="nav_item">
              {link.icon && (
                <img
                  src={link.icon}
                  alt={`${link.label} icon`}
                  className="nav_icon"
                />
              )}
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
