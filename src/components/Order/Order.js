import React from 'react'
import Burger from '../BurgerBuilder/Burger/Burger'

const Order = props => {
	const { email, name, postal, street, totalPrice, ingredients } = props.order
	const ingredientArray = []
	for (let ingredientName in ingredients) {
		ingredientArray.push({
			name: ingredientName,
			amount: ingredients[ingredientName]
		})
	}
	return (
		<div className='container shadow p-4'>
			<div className='row justify-content-center align-items-center'>
				<div className='col-sm col-6'>
					<div className='row d-flex justify-content-center'>
						<h3 className='font-weight-bold'>Recieper</h3>
					</div>
					<div className='row text-secondary'>
						<ul>
							<li>
								<span className='text-primary font-weight-bold'>mail:</span>{' '}
								{email}
							</li>
							<li>
								<span className='text-primary font-weight-bold'>name:</span>{' '}
								{name}
							</li>
							<li>
								<span className='text-primary font-weight-bold'>postal:</span>{' '}
								{postal}
							</li>
							<li>
								<span className='text-primary font-weight-bold'>street:</span>{' '}
								{street}
							</li>
						</ul>
					</div>
					<div className='row'>
						<span className='text-danger font-weight-bold'> Ingredients:</span>
						&nbsp;
						{ingredientArray.map((ing, i) => {
							return (
								<span>
									{ing.name}({ing.amount})&nbsp;
								</span>
							)
						})}
					</div>
					<div className='row'>
						<span className='text-success font-weight-bold'>Price:</span>&nbsp;
						<strong>{totalPrice}$</strong>
					</div>
				</div>
				<div
					style={{ height: 250 }}
					className='col-sm col-6 d-flex align-items-center'
				>
					<Burger ingredients={ingredients} />
				</div>
			</div>
		</div>
	)
}
export default Order
