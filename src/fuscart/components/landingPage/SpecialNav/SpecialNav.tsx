import React from 'react';
import './SpecialNav.css';
import SpecialLinks from './SpecialLinks.tsx';

// Import icons from the specified location


const Categories: React.FC = () => {

  return (
    <div className='special-nav'>
      <ul className='special-navbar'>
        {SpecialLinks.map((SpecialLink, index) => (
          <li key={index} className='special-nav_item'>
            <a href={SpecialLink.to} className='special-nav_link'>
              <img src={SpecialLink.icon} alt={`${SpecialLink.label} icon`} className='special-nav_icon'/> {/* Display icon */}
              <div className='special-nav-text'>{SpecialLink.label}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
