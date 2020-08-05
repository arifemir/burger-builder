import React from 'react';
import Burger from "../../BurgerBuilder/Burger/Burger";

import styles from './CheckoutSummary.module.css'

const CheckoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it taste is well!</h1>
      <div style={{width: '100%', height: '300px', margin: 'auto'}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <button style={{color: 'black', backgroundColor: '#ff3400'}}>CANCEL</button>
      <button style={{color: 'black', backgroundColor: '#36b119'}}>SUCCESS</button>
    </div>
  );
};

export default CheckoutSummary;
