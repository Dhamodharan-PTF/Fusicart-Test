import React, { Fragment, useState, useEffect } from 'react';
import '../Categories/Categories.css';
import { Birthday } from './CategoriesLink';
import { Flowers } from './CategoriesLink';
import { Cakes } from './CategoriesLink';
import { Relations } from './CategoriesLink';
import { Occasions } from './CategoriesLink';
import { Plants } from './CategoriesLink';
import { Themes } from './CategoriesLink';
import { categories_explore } from './CategoriesLink';
import logo from '../../Assets/Logo.png'
import SpecialLinks from '../../Components/Special-Nav/Speciallinks'

const Categories = () => {
  // State for individual dropdowns
  const [isBirthdayOpen, setIsBirthdayOpen] = useState(true);
  const [isFlowersOpen, setIsFlowersOpen] = useState(true);
  const [isRelationsOpen, setIsRelationsOpen] = useState(true);
  const [isCakesOpen, setIsCakesOpen] = useState(true);
  const [isOccasionsOpen, setIsOccasionsOpen] = useState(true);
  const [isPlantsOpen, setIsPlantsOpen] = useState(true);
  const [isThemesOpen, setIsThemesOpen] = useState(true);

  // Function to handle screen resize
  const handleResize = () => {
    if (window.innerWidth < 480) {
      setIsBirthdayOpen(false);
      setIsFlowersOpen(false);
      setIsRelationsOpen(false);
      setIsCakesOpen(false); // Close all dropdowns for mobile screens
      setIsOccasionsOpen(false);
      setIsPlantsOpen(false);
      setIsThemesOpen(false);

    } else {
      setIsBirthdayOpen(true);
      setIsFlowersOpen(true);
      setIsRelationsOpen(true);
      setIsCakesOpen(true); // Open all dropdowns for desktop screens
      setIsOccasionsOpen(true);
      setIsPlantsOpen(true);
      setIsThemesOpen(true);
    }
  };

  useEffect(() => {
    // Initialize state based on screen size
    handleResize();

    // Add event listener for screen resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleContents = (category: string) => {
    // Toggle individual category dropdowns only on mobile screens
    if (window.innerWidth < 480) {
      switch (category) {
        case 'birthday':
          setIsBirthdayOpen(!isBirthdayOpen);
          break;
        case 'flowers':
          setIsFlowersOpen(!isFlowersOpen);
          break;
        case 'relations':
          setIsRelationsOpen(!isRelationsOpen);
          break;
        case 'cakes':
          setIsCakesOpen(!isCakesOpen);
          break;
        case 'occasions':
          setIsOccasionsOpen(!isOccasionsOpen);
          break;
        case 'plants':
          setIsPlantsOpen(!isPlantsOpen);
          break;
        case 'themes':
          setIsThemesOpen(!isThemesOpen);
          break;
        default:
          break;
      }
    }
  };



  return (
    <Fragment>
      <div className="categories">
        <div className="categories-title">
          <div className="categories-title-head">Categories</div>
          <div className="categories-title-sub">
            "Thoughtful gifts for every celebration and cherished relationship."
          </div>
        </div>
        <div className="categories-main">
          <div className="categories-top">
            <div className="categories-container">
              <div className="categories-dropdown">
                <div className="categories-topic" onClick={() => toggleContents('birthday')} style={{ cursor: 'pointer' }}>
                  <span>Birthday</span>

                  {isBirthdayOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                  )}
                </div>
                {isBirthdayOpen && (
                  <>
                    <ul className="categories-contents">
                      {Birthday.map((link, index) => (
                        <li key={index} className="categories-item">
                          <a href={link.to} className="categories-link">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="categories-explore">
                      <a href={categories_explore.birthday} target="_blank" rel="noopener noreferrer" className="categories-explore-link">
                        Explore Birthday
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Categories-right-arrow">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="categories-container">
              <div className="categories-dropdown">
                <div className="categories-topic" onClick={() => toggleContents('flowers')} style={{ cursor: 'pointer' }}>
                  <span>Flowers</span>

                  {isFlowersOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                  )}
                </div>
                {isFlowersOpen && (
                  <>
                    <ul className="categories-contents">
                      {Flowers.map((link, index) => (
                        <li key={index} className="categories-item">
                          <a href={link.to} className="categories-link">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="categories-explore">
                      <a href={categories_explore.flowers} target="_blank" rel="noopener noreferrer" className="categories-explore-link">
                        Explore Flowers
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Categories-right-arrow">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="categories-container">
              <div className="categories-dropdown">
                <div className="categories-topic" onClick={() => toggleContents('relations')} style={{ cursor: 'pointer' }}>
                  <span>Relations</span>

                  {isRelationsOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                  )}
                </div>
                {isRelationsOpen && (
                  <>
                    <ul className="categories-contents">
                      {Relations.map((link, index) => (
                        <li key={index} className="categories-item">
                          <a href={link.to} className="categories-link">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="categories-explore">
                      <a href={categories_explore.relations} target="_blank" rel="noopener noreferrer" className="categories-explore-link">
                        Explore Relations
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Categories-right-arrow">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="categories-container">
              <div className="categories-dropdown">
                <div className="categories-topic" onClick={() => toggleContents('cakes')} style={{ cursor: 'pointer' }}>
                  <span>Cakes</span>

                  {isCakesOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                  )}
                </div>
                {isCakesOpen && (
                  <>
                    <ul className="categories-contents">
                      {Cakes.map((link, index) => (
                        <li key={index} className="categories-item">
                          <a href={link.to} className="categories-link">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="categories-explore">
                      <a href={categories_explore.cakes} target="_blank" rel="noopener noreferrer" className="categories-explore-link">
                        Explore Cakes
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Categories-right-arrow">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="categories-bottom">
            <div className="categories-container">
              <div className="categories-dropdown">
                <div className="categories-topic" onClick={() => toggleContents('occasions')} style={{ cursor: 'pointer' }}>
                  <span>Occasions</span>

                  {isOccasionsOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                  )}
                </div>
                {isOccasionsOpen && (
                  <>
                    <ul className="categories-contents">
                      {Occasions.map((link, index) => (
                        <li key={index} className="categories-item">
                          <a href={link.to} className="categories-link">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="categories-explore">
                      <a href={categories_explore.occasions} target="_blank" rel="noopener noreferrer" className="categories-explore-link">
                        Explore Occasions
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Categories-right-arrow">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="categories-container">
              <div className="categories-dropdown">
                <div className="categories-topic" onClick={() => toggleContents('plants')} style={{ cursor: 'pointer' }}>
                  <span>Plants</span>

                  {isPlantsOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                  )}
                </div>
                {isPlantsOpen && (
                  <>
                    <ul className="categories-contents">
                      {Plants.map((link, index) => (
                        <li key={index} className="categories-item">
                          <a href={link.to} className="categories-link">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="categories-explore">
                      <a href={categories_explore.plants} target="_blank" rel="noopener noreferrer" className="categories-explore-link">
                        Explore Plants
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Categories-right-arrow">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="categories-container">
              <div className="categories-dropdown">
                <div className="categories-topic" onClick={() => toggleContents('themes')} style={{ cursor: 'pointer' }}>
                  <span>Themes</span>

                  {isThemesOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Chervon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                  )}
                </div>
                {isThemesOpen && (
                  <>
                    <ul className="categories-contents">
                      {Themes.map((link, index) => (
                        <li key={index} className="categories-item">
                          <a href={link.to} className="categories-link">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="categories-explore">
                      <a href={categories_explore.themes} target="_blank" rel="noopener noreferrer" className="categories-explore-link">
                        Explore Themes
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Categories-right-arrow">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="categories-container-Special">
              <div className="categories-speical-logo">
                <img src={logo} alt="categories-logo" className='categories-logo' />
              </div>
              <ul className='categories-special-nav'>
                {SpecialLinks.map((SpecialLink, index) => (
                  <li key={index} className='categories-special-nav-item'>
                    <a href={SpecialLink.to} className='categories-special-nav-link'>
                      <div className='categories-special-nav-text'>{SpecialLink.label}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default Categories;
