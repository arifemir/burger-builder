import React, { Component } from 'react'
import axios from '../../axiosOrders'
//redux
import { connect } from 'react-redux'
import {
	addIngredient,
	removeIngredient,
	orderNowClose,
	initIngredient,
	purchaseInit
} from '../../store/actions'

import Fragment from '../../hoc/Fragment'
import BuildControlPanel from '../../components/BurgerBuilder/BuildControlPanel/BuildControlPanel'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/BurgerBuilder/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler'
import Burger from '../../components/BurgerBuilder/Burger/Burger'
class BurgerBuilder extends Component {
	componentDidMount() {
		this.props.initIngr()
	}

	purchaseContinueHandler = () => {
		this.props.onInitPurchase()
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

		let burger = this.props.error ? <p>{this.props.error}</p> : <Spinner />

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
		orderNowCloseP: () => dispatch(orderNowClose()),
		initIngr: () => dispatch(initIngredient()),
		onInitPurchase: () => dispatch(purchaseInit())
	}
}

const mapStateToProps = state => {
	const {
		ingredients,
		totalPrice,
		purchasable,
		error,
		loading
	} = state.burgerBuilderReducer
	return {
		ingredients,
		totalPrice,
		purchasable,
		error,
		loading
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ErrorHandler(BurgerBuilder, axios))
