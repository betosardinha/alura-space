import React from 'react';
import PropTypes from 'prop-types';

import images from 'components/Gallery/images.json';

import styles from './Tags.module.scss';

function Tags({ tags, imagesByTag, setItems }, handleKeyDown) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__list}>
        <li>
          <button
            type="button"
            key="Todas"
            onClick={() => setItems(images)}
            onKeyDown={() => handleKeyDown}
          >
            Todas
          </button>
        </li>

        {tags.map((tag) => (
          <li key={tag}>
            <button
              type="button"
              key={tag}
              onClick={() => imagesByTag(tag)}
              onKeyDown={() => handleKeyDown}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagesByTag: PropTypes.func.isRequired,
  setItems: PropTypes.func.isRequired,
};

export default Tags;
