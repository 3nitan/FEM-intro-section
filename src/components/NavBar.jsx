import React from 'react';
import { useState } from 'react';
import './NavBar.css';
import FeaturesList from './FeaturesList';
import CompanyList from './CompanyList';

export default function NavBar() {
  const [showCompanyList, setShowCompanyList] = useState(false);
  const [showFeaturesList, setShowFeaturesList] = useState(false);

  const handleHover = (event) => {
    const { id } = event.target;
    if (id === 'features-btn') {
      setShowFeaturesList(true);
      setShowCompanyList(false);
    } else if (id === 'company-btn') {
      setShowCompanyList(true);
      setShowFeaturesList(false);
    }
  };

  const handleLeave = () => {
    setShowCompanyList(false);
    setShowFeaturesList(false);
  };

  return (
    <nav>
      <ul>
        <div className='left'>
          <li className='logo'>
            <img src='/assets/logo.svg' alt='' />
          </li>
          <li
            className='buttons'
            id='features-btn'
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Features <img src='/assets/icon-arrow-down.svg' alt='' />
            {showFeaturesList && <FeaturesList />}
          </li>
          <li
            className='buttons'
            id='company-btn'
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Company <img src='/assets/icon-arrow-down.svg' alt='' />
            {showCompanyList && <CompanyList />}
          </li>
          <li className='buttons'>Careers</li>
          <li className='buttons'>About</li>
        </div>

        <div className='right'>
          <li>
            <button>Login</button>
          </li>
          <li>
            <button className='register'>Register</button>
          </li>
        </div>
      </ul>
    </nav>
  );
}
