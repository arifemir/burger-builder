import React, { Component } from 'react'
import axios from '../../axiosOrders'

import Fragment from '../../hoc/Fragment'
import Burger from '../../components/BurgerBuilder/Burger/Burger'
import BuildControlPanel from '../../components/BurgerBuilder/BuildControlPanel/BuildControlPanel'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/BurgerBuilder/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler'

const INGREDIENT_PRICES = {
	salad: 1,
	cheese: 1,
	meat: 2,
	bacon: 2
}

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 0,
		purchasable: true,
		purchasing: false,
		orderButtonText: 'ORDER NOW',
		loading: false,
		error: null
	}

	componentDidMount() {
		axios
			.get('https://burger-67864.firebaseio.com/ingredients.json')
			.then(response => {
				this.setState({ ingredients: response.data }, () => {
					let fetchedIngredients = { ...this.state.ingredients }
					let price = 0
					for (let i in fetchedIngredients) {
						price += fetchedIngredients[i] * INGREDIENT_PRICES[i]
					}
					this.setState({ totalPrice: price })
				})
			})
			.catch(error => {
				this.setState({ error: true })
			})
	}

	updatePurchaseState(updatedIngredients) {
		const sum = Object.values(updatedIngredients).reduce((x, y) => x + y, 0)
		this.setState({ purchasable: sum > 0 })
	}

	purchaseHandler = () => {
		this.setState({ purchasing: true })
	}

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false })
	}

	purchaseContinueHandler = () => {
		// this.setState({ loading: true })
		// const order = {
		// 	ingredients: this.state.ingredients,
		// 	price: this.state.totalPrice,
		// 	customer: {
		// 		name: 'arif',
		// 		age: 21,
		// 		address: {
		// 			street: 'Teststreet 1',
		// 			zipCode: '41355',
		// 			country: 'Sakarya'
		// 		},
		// 		email: 'arif@gauk.com'
		// 	}
		// }
		// axios
		// 	.post('/orders.json', order)
		// 	.then(res => this.setState({ loading: false, purchasing: false }))
		// 	.catch(err => {
		// 		this.setState({ loading: false, purchasing: false })
		// 	})
		const queryParams = []
		for (let i in this.state.ingredients)
			queryParams.push(
				encodeURIComponent(i) +
					'=' +
					encodeURIComponent(this.state.ingredients[i])
			)

		const queryString = queryParams.join('&')

		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString
		})
	}

	addIngredientHandler = type => {
		const updatedIngredients = { ...this.state.ingredients }
		updatedIngredients[type] = this.state.ingredients[type] + 1
		this.setState({
			ingredients: updatedIngredients,
			totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
		})
		this.updatePurchaseState(updatedIngredients)
	}

	removeIngredientHandler = type => {
		if (this.state.ingredients[type] > 0) {
			const updatedIngredients = { ...this.state.ingredients }
			updatedIngredients[type] = this.state.ingredients[type] - 1
			if (this.state.totalPrice >= INGREDIENT_PRICES[type])
				this.setState({
					ingredients: updatedIngredients,
					totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
				})
			this.updatePurchaseState(updatedIngredients)
		}
	}

	render() {
		const disabledInfo = {
			...this.state.ingredients
		}

		for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0

		let orderSummary = null

		let burger = this.state.error ? (
			<p>ingredients can't be loaded</p>
		) : (
			<Spinner />
		)

		if (this.state.ingredients) {
			burger = (
				<Fragment>
					<Burger ingredients={this.state.ingredients} />
					<BuildControlPanel
						addIngredient={type => this.addIngredientHandler(type)}
						removeIngredient={type => this.removeIngredientHandler(type)}
						disabledInfo={disabledInfo}
						price={this.state.totalPrice}
						purchasable={this.state.purchasable}
						purchasing={this.purchaseHandler}
						orderButtonText={this.state.orderButtonText}
					/>
				</Fragment>
			)
			orderSummary = (
				<OrderSummary
					ingredients={this.state.ingredients}
					purchaseCanceled={this.purchaseCancelHandler}
					purchaseContinue={this.purchaseContinueHandler}
					price={this.state.totalPrice}
				/>
			)
		}
		if (this.state.loading) orderSummary = <Spinner />

		return (
			<Fragment>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					{orderSummary}
				</Modal>
				{burger}
			</Fragment>
		)
	}
}

export default ErrorHandler(BurgerBuilder, axios)
