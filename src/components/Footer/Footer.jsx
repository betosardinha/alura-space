import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a
          href="www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineFacebook
            size={25}
            color="#d9d9d9"
            alt="Ícone do facebook"
          />
        </a>
        <a
          href="www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram
            size={25}
            color="#d9d9d9"
            alt="Ícone do instagram"
          />
        </a>
        <a
          href="www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter
            size={25}
            color="#d9d9d9"
            alt="Ícone do twitter"
          />
        </a>
      </div>
      <p>Desenvolvido por Alberto Sardinha.</p>
    </footer>
  );
}

export default Footer;
