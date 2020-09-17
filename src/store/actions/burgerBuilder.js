import { ADD_INGREDIENTS, REMOVE_INGREDIENTS } from './actionTypes'

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
