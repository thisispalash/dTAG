import { useEffect, useState } from 'react';

import Head from '../components/Head';
import Header from '../components/Header';

import styles from '../styles/main.module.css';

export default function Index() {


  return (
    <>
      <Head />
      <Header index={true} />
      <div className={styles.welcome}>
        <p className={styles.welcome__title}>
          decentralized Text Adventure Games
        </p>
        <p className={styles.welcome__body}>
          Create, or play, text adventure games powered by NFTs!
        </p>
        <p>
          {/* TODO Add `Enter App` button */}
        </p>
      </div>
    </>
  );
}