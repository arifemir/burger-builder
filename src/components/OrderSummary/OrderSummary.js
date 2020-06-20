import React from 'react';

import Fragment from "../../hoc/Fragment";
import styles from './OrderSummary.module.css'
import cn from 'classnames'
import ControlLabel from "../BuildControlPanel/Control/ControlLabel/ControlLabel";
import OrderSummaryButton from "./OrderSummaryButton/OrderSummaryButton";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey =>
    <li className={cn(styles.ListItem)} key={ingredientKey}>
      <span className={styles.Key}>
        <ControlLabel label={ingredientKey}/> : {props.ingredients[ingredientKey]}
      </span>
    </li>
  )
  return (
    <Fragment>
      <h3 className={styles.Header}>Your Order</h3>
      <ol className={styles.List}>
        {ingredientSummary}
      </ol>
      <OrderSummaryButton purchaseState={props.purchaseCanceled} >Cancel</OrderSummaryButton>
      <OrderSummaryButton purchaseState={props.purchaseContinue}>Continue</OrderSummaryButton>
    </Fragment>
  );
};

export default OrderSummary;
