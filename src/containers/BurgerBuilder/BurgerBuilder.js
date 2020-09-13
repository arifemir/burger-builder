import React, { Component } from 'react'
import axios from '../../axiosOrders'
//redux
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

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
		totalPrice: 4,
		purchasable: true,
		purchasing: false,
		orderButtonText: 'ORDER NOW',
		loading: false,
		error: null
	}

	componentDidMount() {
		// axios
		// 	.get('https://burger-67864.firebaseio.com/ingredients.json')
		// 	.then(response => {
		// 		this.setState({ ingredients: response.data }, () => {
		// 			let fetchedIngredients = { ...this.state.ingredients }
		// 			let price = 0
		// 			for (let i in fetchedIngredients) {
		// 				price += fetchedIngredients[i] * INGREDIENT_PRICES[i]
		// 			}
		// 			this.setState({ totalPrice: price })
		// 		})
		// 	})
		// 	.catch(error => {
		// 		this.setState({ error: true })
		// 	})
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
		const queryParams = []
		for (let i in this.state.ingredients)
			queryParams.push(
				encodeURIComponent(i) +
					'=' +
					encodeURIComponent(this.state.ingredients[i])
			)
		queryParams.push('price=' + this.state.totalPrice)
		const queryString = queryParams.join('&')

		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString
		})
	}

	render() {
		const disabledInfo = {
			...this.props.ingredients
		}

		for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0

		let orderSummary = null

		let burger = this.state.error ? (
			<p>ingredients can't be loaded</p>
		) : (
			<Spinner />
		)

		if (this.props.ingredients) {
			burger = (
				<Fragment>
					<Burger ingredients={this.props.ingredients} />
					<BuildControlPanel
						addIngredient={this.props.addIngredient}
						removeIngredient={this.props.removeIngredient}
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
					ingredients={this.props.ingredients}
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

const mapDispatchToProps = dispatch => {
	return {
		addIngredient: ingredientName =>
			dispatch({ type: actionTypes.ADD_INGREDIENTS, ingredientName }),
		removeIngredient: ingredientName =>
			dispatch({ type: actionTypes.REMOVE_INGREDIENTS, ingredientName })
	}
}

const mapStateToProps = state => {
	const { ingredients } = state
	return {
		ingredients
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ErrorHandler(BurgerBuilder, axios))
