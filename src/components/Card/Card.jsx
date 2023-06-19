import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineHeart, AiOutlineExpandAlt } from 'react-icons/ai';

import styles from './Card.module.scss';

function Card({ item }) {
  return (
    <li key={item.id} className={styles.card}>
      <img
        className={styles.card__image}
        src={item.path}
        alt={item.title}
      />
      <p className={styles.card__description}>{item.title}</p>
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
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    path: PropTypes.string,
    credits: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
};

export default Card;
