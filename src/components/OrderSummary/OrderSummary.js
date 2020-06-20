import React from 'react';

import Fragment from "../../hoc/Fragment";
import styles from './OrderSummary.module.css'
const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey =>
    <li key={ingredientKey}>
      <span className={styles.Key}>
        {ingredientKey}
      </span>:
      {props.ingredients[ingredientKey]}
    </li>
  )
  return (
    <Fragment>
      <h3>Your Order</h3>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout</p>
    </Fragment>
  );
};

export default OrderSummary;
