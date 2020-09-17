import * as actionTypes from './actionTypes'
const { ADD_INGREDIENTS, REMOVE_INGREDIENTS } = actionTypes

export const addIngredient = ingredientName => {
	return {
		type: ADD_INGREDIENTS,
		ingredientName
	}
}

export const removeIngredient = ingredientName => {
	return {
		type: REMOVE_INGREDIENTS,
		ingredientName
	}
}
