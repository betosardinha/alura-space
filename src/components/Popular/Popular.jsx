import React from 'react';

import Button from 'components/Button';

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
      <Button>Ver mais fotos</Button>
    </aside>
  );
}

export default Popular;
