import React from 'react';
import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Gallery from 'components/Gallery';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Popular from 'components/Popular';

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
        <div className={styles.gallery}>
          <Gallery />
          <Popular />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
