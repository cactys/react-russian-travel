import React from 'react';

function Header() {
  return (
    <header className='header'>
        <a href='/' className='header__logo'></a>
        <div className='header__lang-links'>
          <a href='/' className='header__lang-link header__lang-link_active'>
            Ru
          </a>
          <a href='/' className='header__lang-link'>
            En
          </a>
        </div>
      </header>
  );
}

export default Header;