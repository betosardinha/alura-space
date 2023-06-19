import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineHeart, AiOutlineExpandAlt } from 'react-icons/ai';

import styles from './Cards.module.scss';

function Cards({ items }) {
  return (
    <ul className={styles.cards}>
      {items.map((item) => (
        <li key={item.id} className={styles.cards__card}>
          <img
            className={styles.cards__image}
            src={item.path}
            alt={item.title}
          />
          <p className={styles.cards__description}>{item.title}</p>
          <div>
            <p>{item.title}</p>
            <span>
              <AiOutlineHeart
                size={20}
                color="#d9d9d9"
                alt="ícone coração de curtir"
              />
              <AiOutlineExpandAlt
                size={20}
                color="#d9d9d9"
                alt="ícone de abrir modal"
              />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

Cards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      credits: PropTypes.string,
      path: PropTypes.string,
      id: PropTypes.string,
      tag: PropTypes.string,
    }),
  ).isRequired,
};

export default Cards;
