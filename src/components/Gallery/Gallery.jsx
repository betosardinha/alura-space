import React, { useState } from 'react';

import Cards from '../Cards';
import Tags from '../Tags';

import images from './images.json';

import styles from './Gallery.module.scss';

function Gallery() {
  const [items, setItems] = useState(images);
  const tags = [...new Set(images.map((value) => value.tag))];

  const imagesByTag = (tag) => {
    const filteredImages = images.filter((image) => image.tag === tag);
    setItems(filteredImages);
  };

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} imagesByTag={imagesByTag} setItems={setItems} />
      <Cards items={items} />
    </section>
  );
}

export default Gallery;
