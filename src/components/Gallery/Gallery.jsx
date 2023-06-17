import React from 'react';
import { AiOutlineHeart, AiOutlineExpandAlt } from 'react-icons/ai';

import Tags from '../Tags';

import styles from './Gallery.module.scss';

import images from './images.json';

function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={styles.gallery__cards}>
        {images.map((image) => (
          <li key={image.id} className={styles.gallery__card}>
            <img
              className={styles.gallery__image}
              src={image.path}
              alt={image.title}
            />
            <p className={styles.gallery__description}>{image.title}</p>
            <div>
              <p>{image.title}</p>
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
    </section>
  );
}

export default Gallery;
