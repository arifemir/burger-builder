import React from 'react';

import Fragment from "../../hoc/Fragment";
import styles from './OrderSummary.module.css'
import cn from 'classnames'
import ControlLabel from "../BuildControlPanel/Control/ControlLabel/ControlLabel";
const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
    return  <li className={cn(styles.ListItem)} key={ingredientKey}>
              <span className={styles.Key}>
                <ControlLabel label={ingredientKey}/> : {props.ingredients[ingredientKey]}
              </span>
            </li>
  }
  )
  return (
    <Fragment>
      <h3 className={styles.Header}>Your Order</h3>
      <ol className={styles.List}>
        {ingredientSummary}
      </ol>
      <button className={styles.ContinueBtn}>Continue to checkout</button>
    </Fragment>
  );
};

export default OrderSummary;
