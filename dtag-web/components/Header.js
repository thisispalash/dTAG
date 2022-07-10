import { useState, useEffect } from 'react';

import Score from './Score';
import Wallet from './Wallet';

import styles from '../styles/header.module.css';

export default function Header({ 
  index = false
}) {

  const [ logged, setLogged ] = useState(index);

  useEffect(() => {
    index = logged;
  }, [logged]);

  return(
    <div className={styles.header}>
      {!index && <Score />}
      <Wallet />
    </div>
  );
}