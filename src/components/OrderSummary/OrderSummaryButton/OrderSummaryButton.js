import React from 'react';

import styles from './OrderSummaryButton.module.css'
import cn from 'classnames'
const OrderSummaryButton = (props) => {
  return (
    <button
      className={cn(styles.SummaryBtn,props.children==='Cancel'?styles.cancel:styles.continue)}
      onClick={props.purchaseState}
    >
      {props.children}
    </button>
  );
};

export default OrderSummaryButton;
