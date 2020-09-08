import React from 'react'
import Burger from '../../BurgerBuilder/Burger/Burger'

import styles from './CheckoutSummary.module.css'

const CheckoutSummary = props => {
	const { checkoutCancelled, checkoutContinued, ingredients } = props
	return (
		<div className={styles.CheckoutSummary}>
			<h1>We hope it taste is well!</h1>
			<div style={{ width: '100%', height: '300px', margin: 'auto' }}>
				<Burger ingredients={ingredients} />
			</div>
			<button
				onClick={checkoutCancelled}
				style={{
					color: '#ff3400',
					fontSize: '14px',
					backgroundColor: 'transparent',
					border: 'none',
					cursor: 'pointer',
					fontWeight: 'bolder'
				}}
			>
				CANCEL
			</button>
			<button
				onClick={checkoutContinued}
				style={{
					color: '#36b119',
					fontSize: '14px',
					backgroundColor: 'transparent',
					border: 'none',
					cursor: 'pointer',
					fontWeight: 'bolder'
				}}
			>
				SUCCESS
			</button>
		</div>
	)
}

export default CheckoutSummary
