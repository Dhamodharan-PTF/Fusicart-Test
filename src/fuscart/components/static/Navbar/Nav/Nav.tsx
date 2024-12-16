// import React, { useState } from 'react';
// // Import icons from the correct path inside Navicons folder
// import Birthday_Icon from '../../../../assets/Navicons/party-hat.png';
// import Flowers_Icon from '../../../../assets/Navicons/flower-bouquet.png';
// import Relations_Icon from '../../../../assets/Navicons/relationship.png';
// import Cakes_Icon from '../../../../assets/Navicons/cake.png';
// import Occasions_Icon from '../../../../assets/Navicons/festive.png';
// import Plants_Icon from '../../../../assets/Navicons/plant.png';
// import Themes_Icon from '../../../../assets/Navicons/confetti.png';

// const Navbar: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track active menu item
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track hovered menu item
//   const iconColor = '#C96868'; // Default icon color
//   const iconHoverColor = '#FFF4EA'; // Hover font color
//   const activeColor = '#FFF4EA'; // Active menu item color
//   const transitionStyle = { transition: 'color 0.3s ease, background-color 0.3s ease' }; // Smooth transition

//   const navItems = [
//     { label: 'Birthday', icon: Birthday_Icon },
//     { label: 'Flowers', icon: Flowers_Icon },
//     { label: 'Relations', icon: Relations_Icon },
//     { label: 'Cakes', icon: Cakes_Icon },
//     { label: 'Occasions', icon: Occasions_Icon },
//     { label: 'Plants', icon: Plants_Icon },
//     { label: 'Themes', icon: Themes_Icon },
//   ];

//   return (
//     <nav
//       style={{
//         borderRadius: '10px',
//         width: 'calc(100% - 90px)', // Make container slightly smaller than full width
//         maxWidth: '1500px',
//         display: 'flex',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         padding: '10px 20px',
//         backgroundColor: '#FFF4EA',
//         boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//         margin: '0 auto', // Center container horizontally
//       }}
//     >
//       {navItems.map((item, index) => (
//         <div
//           key={index}
//           onClick={() => setActiveIndex(index)} // Set active menu on click
//           onMouseEnter={() => setHoveredIndex(index)} // Set hovered menu on mouse enter
//           onMouseLeave={() => setHoveredIndex(null)} // Reset hovered menu on mouse leave
//           style={{
//             fontFamily: 'var(--righteous-font)', // Apply Righteous font
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px', // Gap between icon and text
//             cursor: 'pointer',
//             color: activeIndex === index ? activeColor : iconColor, // Highlight active item color
//             fontSize: '20px',
//             padding: '5px 10px', // Add padding for better spacing and hover effect
//             borderRadius: '5px', // Rounded corners for hover effect
//             backgroundColor:
//               hoveredIndex === index || activeIndex === index
//                 ? '#7EACB5' // Light background on hover or active
//                 : 'transparent', // Default background
//             ...transitionStyle, // Apply transition for color and background
//           }}
//         >
//           <img
//             src={item.icon}
//             alt={`${item.label} Icon`}
//             style={{
//               height: '24px',
//               width: '24px',
//               ...transitionStyle, // Apply transition for icon color
//             }}
//           />
//           <span>{item.label}</span>
//         </div>
//       ))}
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react'   
import Navlinks from '../Nav/Navlinks.tsx';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='navbar'>
        {Navlinks.map((link, index) => (
          <li key={index} className='nav_item'>
            <a href={link.to} className='nav_link'>
              <img src={link.icon} alt={`${link.label} icon`} className='nav_icon'/> {/* Display icon */}
              {link.label} {/* Display label */}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav