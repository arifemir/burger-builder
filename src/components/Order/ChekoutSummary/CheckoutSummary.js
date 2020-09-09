import React from 'react'
import Burger from '../../BurgerBuilder/Burger/Burger'
import Button from '../../util/Button'
import styles from './CheckoutSummary.module.css'

const CheckoutSummary = props => {
	const { checkoutCancelled, checkoutContinued, ingredients } = props
	return (
		<div className={styles.CheckoutSummary}>
			<h1>We hope it taste is well!</h1>
			<div style={{ width: '100%', height: '200px', margin: 'auto' }}>
				<Burger ingredients={ingredients} />
			</div>
			<Button onClick={checkoutCancelled} type={'danger'}>
				CANCEL
			</Button>
			<Button onClick={checkoutContinued} type={'success'}>
				SUCCESS
			</Button>
		</div>
	)
}

export default CheckoutSummary
