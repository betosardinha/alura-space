import React from 'react';

import Cards from '../Cards';
import Tags from '../Tags';

import images from './images.json';

import styles from './Gallery.module.scss';

function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards items={images} />
    </section>
  );
}

export default Gallery;
