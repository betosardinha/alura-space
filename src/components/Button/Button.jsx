import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

function Button({ children }) {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
