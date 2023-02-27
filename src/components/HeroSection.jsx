import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className='hero'>
      <div className='left'>
        <h1>
          Make <br /> remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamliine processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div className='footer-icons'>
          <img src='/assets/client-databiz.svg' alt='databiz' />
          <img src='/assets/client-audiophile.svg' alt='audiophile' />
          <img src='/assets/client-meet.svg' alt='meet' />
          <img src='/assets/client-maker.svg' alt='maker' />
        </div>
      </div>

      <div className='right'>
        <img src='/assets/image-hero-desktop.png' alt='' />
      </div>
    </div>
  );
}
