import React from 'react';

import BannerImg from '../../assets/images/banner.jpg';

import styles from './Banner.module.scss';

function Banner() {
  return (
    <div className={styles.banner}>
      <h1>A galeria mais completa do espaço</h1>
      <img src={BannerImg} alt="A imagem da terra vista do espaço" />
    </div>
  );
}

export default Banner;
