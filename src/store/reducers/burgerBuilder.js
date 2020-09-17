import * as actionTypes from '../actions/actionTypes'

const INGREDIENT_PRICES = {
	salad: 1,
	cheese: 1,
	meat: 2,
	bacon: 2
}

const initialState = {
	ingredients: {
		salad: 0,
		bacon: 0,
		cheese: 0,
		meat: 0
	},
	totalPrice: 0,
	purchasable: false
}

const updatePurchaseState = updatedIngredients => {
	const sum = Object.values(updatedIngredients).reduce((x, y) => x + y, 0)
	return sum > 0
}

const reducer = (state = initialState, action) => {
	const { ingredients, totalPrice } = state
	const { type, ingredientName } = action
	switch (type) {
		case actionTypes.ADD_INGREDIENTS: {
			const newState = { ...state }
			newState.ingredients = {
				...ingredients,
				[ingredientName]: ingredients[ingredientName] + 1
			}
			newState.totalPrice = totalPrice + INGREDIENT_PRICES[ingredientName]
			newState.purchasable = updatePurchaseState(newState.ingredients)

			return newState
		}
		case actionTypes.REMOVE_INGREDIENTS: {
			const newState = { ...state }
			newState.ingredients = {
				...ingredients,
				[ingredientName]: ingredients[ingredientName] - 1
			}
			newState.totalPrice = totalPrice - INGREDIENT_PRICES[ingredientName]
			newState.purchasable = updatePurchaseState(newState.ingredients)

			return newState
		}
		default:
			return state
	}
}

export default reducer
