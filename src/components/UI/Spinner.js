import React from 'react';
import styles from './Spinner.module.css';

function Spinner(props) {
  return (
    <div className={styles.loader}>Loading...</div>
  );
}

export default Spinner;
