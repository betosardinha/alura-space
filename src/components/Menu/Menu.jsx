import React from 'react';
import MenuItem from '../MenuItem';

import menuItens from './menu-itens.json';

import styles from './Menu.module.scss';

function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {menuItens.map((menuItem) => (
          <MenuItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
