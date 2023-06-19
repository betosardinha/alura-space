import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

import styles from './Cards.module.scss';

function Cards({ items }) {
  return (
    <ul className={styles.cards}>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </ul>
  );
}

Cards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      path: PropTypes.string,
      credits: PropTypes.string,
      tag: PropTypes.string,
    }),
  ).isRequired,
};

export default Cards;
