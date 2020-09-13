import React from 'react'

import styles from './OrderSummaryButton.module.css'
const OrderSummaryButton = props => {
	return (
		<button className={styles.SummaryBtn} onClick={props.purchaseState}>
			{props.children}
		</button>
	)
}

export default OrderSummaryButton
