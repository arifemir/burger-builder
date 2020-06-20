import React from 'react';
import styles from "./Price.module.css";

const Price = (props) =>
  <p className={styles.Price}>
    Current Price: {props.price}$
  </p>


export default Price;
