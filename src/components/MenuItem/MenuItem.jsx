import React from 'react';
import PropTypes from 'prop-types';

import styles from './MenuItem.module.scss';

function MenuItem({ menuItem }) {
  return (
    <li className={styles.menuItem}>
      <img src={menuItem.path} alt={menuItem.alt} />
      <a href="/">{menuItem.link}</a>
    </li>
  );
}

MenuItem.propTypes = {
  menuItem: PropTypes.shape({
    id: PropTypes.number,
    path: PropTypes.string,
    alt: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default MenuItem;
