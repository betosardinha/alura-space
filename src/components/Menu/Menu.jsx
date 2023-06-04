import React from 'react';

import HomeIcon from '../../images/icons/home-active.svg';
import MostLikedIcon from '../../images/icons/most-liked.svg';
import MostViewsIcon from '../../images/icons/most-views.svg';
import NewIcon from '../../images/icons/new.svg';
import SurpriseMeIcon from '../../images/icons/surprise-me.svg';

import styles from './Menu.module.scss';

function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <img src={HomeIcon} alt="Ícone de início" />
          <a href="/">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={MostLikedIcon} alt="Ícone de mais curtidas" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={MostViewsIcon} alt="Ícone de mais vistas" />
          <a href="/">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={NewIcon} alt="Ícone de novas" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={SurpriseMeIcon} alt="Ícone de surpreenda-me" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
