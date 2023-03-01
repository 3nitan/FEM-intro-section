import React, { useRef } from 'react';
import { useState } from 'react';
import './NavBar.css';
import FeaturesList from './FeaturesList';
import CompanyList from './CompanyList';

export default function NavBar() {
  const [showCompanyList, setShowCompanyList] = useState(false);
  const [showFeaturesList, setShowFeaturesList] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // hover funtion for the dropdowns
  // const handleHover = (event) => {
  //   const { id } = event.target;
  //   if (id === 'features-btn') {
  //     setShowFeaturesList(true);
  //     setShowCompanyList(false);
  //   } else if (id === 'company-btn') {
  //     setShowCompanyList(true);
  //     setShowFeaturesList(false);
  //   }
  // };

  // const handleLeave = () => {
  //   setShowCompanyList(false);
  //   setShowFeaturesList(false);
  // };
  const handleFeaturesHover = () => {
    setShowCompanyList(false);
    setShowFeaturesList(true);
  };

  const handleCompanyHover = () => {
    setShowCompanyList(true);
    setShowFeaturesList(false);
  };

  const handleHoverLeave = () => {
    setShowCompanyList(false);
    setShowFeaturesList(false);
  };

  // responsive navbar funtion
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav');
  };

  return (
    <nav className={`${showMenu ? 'responsive_nav' : ''}`} ref={navRef}>
      <ul>
        <div className='left'>
          <li className='logo'>
            <img src='/assets/logo.svg' alt='' />
          </li>

          {/* Add toggle button for responsive navbar */}
          <li className='toggle-button'>
            <img
              src={`${
                showMenu
                  ? '/assets/icon-close-menu.svg'
                  : '/assets/icon-menu.svg'
              }`}
              alt='Toggle Navigation'
              onClick={toggleMenu}
            />
          </li>

          {showMenu && (
            <>
              <li
                className={`buttons ${showMenu ? 'show' : ''}`}
                id='features-btn'
                onMouseEnter={handleFeaturesHover}
                onMouseLeave={handleHoverLeave}
                aria-haspopup='true'
                aria-expanded={showFeaturesList}
              >
                Features <img src='/assets/icon-arrow-down.svg' alt='' />
                {showFeaturesList && <FeaturesList />}
              </li>
              <li
                className={`buttons ${showMenu ? 'show' : ''}`}
                id='company-btn'
                onMouseEnter={handleCompanyHover}
                onMouseLeave={handleHoverLeave}
                aria-haspopup='true'
                aria-expanded={showCompanyList}
              >
                Company <img src='/assets/icon-arrow-down.svg' alt='' />
                {showCompanyList && <CompanyList />}
              </li>
              <li className={`buttons ${showMenu ? 'show' : ''}`}>Careers</li>
              <li className={`buttons ${showMenu ? 'show' : ''}`}>About</li>
            </>
          )}
        </div>

        {showMenu && (
          <>
            <div className={`right ${showMenu ? 'show' : ''}`}>
              <li>
                <button>Login</button>
              </li>
              <li>
                <button className='register'>Register</button>
              </li>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
}
