import * as actionTypes from '../actions/actionTypes'

const INGREDIENT_PRICES = {
	salad: 1,
	cheese: 1,
	meat: 2,
	bacon: 2
}

const initialState = {
	ingredients: null,
	totalPrice: 0,
	purchasable: false,
	error: null,
  building: false
}

const updatePurchaseState = updatedIngredients => {
	const sum = Object.values(updatedIngredients).reduce((x, y) => x + y, 0)
	return sum > 0
}

const reducer = (state = initialState, action) => {
	const { ingredients, totalPrice } = state
	switch (action.type) {
		case actionTypes.ADD_INGREDIENTS: {
			const newState = { ...state }
			newState.ingredients = {
				...ingredients,
				[action.ingredientName]: ingredients[action.ingredientName] + 1
			}
			newState.totalPrice =
				state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
			newState.purchasable = updatePurchaseState(newState.ingredients)
      newState.building = true
			return newState
		}
		case actionTypes.REMOVE_INGREDIENTS: {
			const newState = { ...state }
			newState.ingredients = {
				...ingredients,
				[action.ingredientName]: ingredients[action.ingredientName] - 1
			}
			newState.totalPrice =
				totalPrice - INGREDIENT_PRICES[action.ingredientName]
			newState.purchasable = updatePurchaseState(newState.ingredients)
      newState.building = true
      return newState
		}
		case actionTypes.SET_INGREDIENTS: {
			return {
				...state,
				ingredients: state.building ? state.ingredients : action.ingredients,
				purchasable: updatePurchaseState(action.ingredients),
				error: false
			}
		}
		case actionTypes.SET_TOTAL_PRICE: {
			return {
				...state,
				totalPrice: state.building ? state.totalPrice : action.totalPrice,
				error: false
			}
		}
		case actionTypes.FETCH_INGREDIENTS_FAILED: {
			return {
				...state,
				error: action.error
			}
		}
		default:
			return state
	}
}

export default reducer
