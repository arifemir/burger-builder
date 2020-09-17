import React, { Component } from 'react'
import axios from '../../axiosOrders'
//redux
import { connect } from 'react-redux'
import {
	addIngredient,
	removeIngredient,
	orderNowClose
} from '../../store/actions'

import Fragment from '../../hoc/Fragment'
import Burger from '../../components/BurgerBuilder/Burger/Burger'
import BuildControlPanel from '../../components/BurgerBuilder/BuildControlPanel/BuildControlPanel'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/BurgerBuilder/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler'

class BurgerBuilder extends Component {
	state = {
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

	purchaseContinueHandler = () => {
		this.props.history.push('/checkout')
		this.props.orderNowCloseP()
	}

	render() {
		const { ingredients, totalPrice } = this.props
		const disabledInfo = {
			...ingredients
		}

		for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0

		let orderSummary = null

		let burger = this.state.error ? (
			<p>ingredients can't be loaded</p>
		) : (
			<Spinner />
		)

		if (ingredients) {
			burger = (
				<Fragment>
					<Burger ingredients={ingredients} />
					<BuildControlPanel
						addIngredient={this.props.addIngredientP}
						removeIngredient={this.props.removeIngredientP}
						disabledInfo={disabledInfo}
						price={totalPrice}
					/>
				</Fragment>
			)
			orderSummary = (
				<OrderSummary purchaseContinue={this.purchaseContinueHandler} />
			)
		}
		if (this.state.loading) orderSummary = <Spinner />

		return (
			<Fragment>
				<Modal>{orderSummary}</Modal>
				{burger}
			</Fragment>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addIngredientP: ingredientName => dispatch(addIngredient(ingredientName)),
		removeIngredientP: ingredientName =>
			dispatch(removeIngredient(ingredientName)),
		orderNowCloseP: () => dispatch(orderNowClose())
	}
}

const mapStateToProps = state => {
	const { ingredients, totalPrice, purchasable } = state.burgerBuilderReducer
	return {
		ingredients,
		totalPrice,
		purchasable
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ErrorHandler(BurgerBuilder, axios))
