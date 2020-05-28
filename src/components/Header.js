import React from 'react';

import './Header.css';

import facebookLogo from '../assets/facebook-logo.svg';

function Header() {
  return (
    <header>
      <div id="content">
        <img src={facebookLogo} />
        <strong>Meu perfil</strong>
      </div>
    </header>
  );
}

export default Header;