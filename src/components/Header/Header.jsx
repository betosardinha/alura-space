import React from 'react';
import LogoImg from '../../images/logo-type-white.svg';
import SearchIcon from '../../images/icons/search.svg';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoImg} alt="Logo do Alura Space" />
      <div className={styles.header__container}>
        <input className={styles.header__input} type="text" placeholder="O que você procura?" />
        <img src={SearchIcon} alt="Ícone de lupa" />
      </div>
    </header>
  );
}

export default Header;
