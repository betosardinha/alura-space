import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu';

import styles from './Homepage.module.scss';

function Homepage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.main}>
          <Menu />
          <Banner />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
