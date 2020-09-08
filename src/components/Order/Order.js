import React from 'react'
import styles from './Order.module.css'

const Order = () => {
	return (
		<div className={styles.styles}>
			<p>Ingredients: Salad(1)</p>
			<p>
				Price <strong>USD 5.45</strong>
			</p>
		</div>
	)
}
export default Order
