import React from 'react';

import images from './images.json';

import styles from './Popular.module.scss';

function Popular() {
  return (
    <aside className={styles.popular}>
      <h2>Populares</h2>
      <ul className={styles.popular__images}>
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.path} alt={image.alt} />
          </li>
        ))}
      </ul>
      <button type="button">Ver mais fotos</button>
    </aside>
  );
}

export default Popular;
