import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <div className='left'>
          <li className='logo'>
            <img src='/assets/logo.svg' alt='' />
          </li>
          <li className='buttons'>
            Features <img src='/assets/icon-arrow-down.svg' alt='' />
          </li>
          <li className='buttons'>
            Company <img src='/assets/icon-arrow-down.svg' alt='' />
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
