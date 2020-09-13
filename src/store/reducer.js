import * as actionTypes from './actions'

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
	totalPrice: 0
}

const reducer = (state = initialState, action) => {
	const { ingredients, totalPrice } = state
	const { type, ingredientName } = action
	switch (type) {
		case actionTypes.ADD_INGREDIENTS: {
			return {
				...state,
				ingredients: {
					...ingredients,
					[ingredientName]: ingredients[ingredientName] + 1
				},
				totalPrice: totalPrice + INGREDIENT_PRICES[ingredientName]
			}
		}
		case actionTypes.REMOVE_INGREDIENTS: {
			return {
				...state,
				ingredients: {
					...ingredients,
					[ingredientName]: ingredients[ingredientName] - 1
				},
				totalPrice: totalPrice - INGREDIENT_PRICES[ingredientName]
			}
		}
		default:
			return state
	}
}

export default reducer
