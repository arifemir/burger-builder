import React from 'react';
import styles from './OrderButton.module.css'

const OrderButton = (props) => {
  return (
    <button
      className={styles.OrderButton}
      disabled={!props.purchasable}
    >
      {props.content}
    </button>
  );
};

export default OrderButton;
