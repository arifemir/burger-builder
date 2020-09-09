import React from 'react'
import styles from './Order.module.css'

const Order = props => {
	const { email, name, postal, street, price, ingredients } = props.order
	const ingredientArray = []
	for (let ingredientName in ingredients) {
		ingredientArray.push({
			name: ingredientName,
			amount: ingredients[ingredientName]
		})
	}
	return (
		<div className={styles.Order}>
			<h3>Recieper</h3>
			<div className={styles.Infos}>
				<div>mail: {email}</div>
				<div>name: {name}</div>
				<div>postal: {postal}</div>
				<div>street: {street}</div>
			</div>
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
