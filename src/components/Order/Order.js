import React from 'react'
import styles from './Order.module.css'

const Order = props => {
	const { customer, price, ingredients } = props.order
	const ingredientArray = []
	for (let ingredientName in ingredients) {
		ingredientArray.push({
			name: ingredientName,
			amount: ingredients[ingredientName]
		})
	}
	return (
		<div className={styles.Order}>
			<p>
				Ingredients:
				<ul>
					{ingredientArray.map((ing, i) => {
						return (
							<li>
								{ing.name}({ing.amount})
							</li>
						)
					})}
				</ul>
			</p>
			<p>
				Price <strong>USD {price}</strong>
			</p>
		</div>
	)
}
export default Order
