import React from 'react';
import Logo from '../../images/logo-type-white.svg';
import SearchIcon from '../../images/icons/search.svg';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo do Alura Space" />
      <div>
        <input type="text" placeholder="O que você procura?" />
        <img src={SearchIcon} alt="Ícone de lupa" />
      </div>
    </header>
  );
}

export default Header;
