import axios from '../../axiosOrders'
import {
	ADD_INGREDIENTS,
	REMOVE_INGREDIENTS,
	SET_INGREDIENTS,
	FETCH_INGREDIENTS_FAILED,
	SET_TOTAL_PRICE,
  AUTH_FOR_ORDER
} from './actionTypes'

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

export const setIngredients = ingredients => {
	return {
		type: SET_INGREDIENTS,
		ingredients
	}
}

export const setFetchFailedError = error => {
	return {
		type: FETCH_INGREDIENTS_FAILED,
		error
	}
}

export const initIngredient = () => {
	return dispatch => {
		axios
			.get('https://burger-67864.firebaseio.com/ingredients.json')
			.then(res => {
				dispatch(setIngredients(res.data))
			})
			.catch(err => {
				dispatch(setFetchFailedError(err.message))
			})
	}
}

export const setTotalPrice = totalPrice => {
	console.log(totalPrice)
	return {
		type: SET_TOTAL_PRICE,
		totalPrice
	}
}

export const initTotalPrice = () => {
	return dispatch => {
		axios
			.get('https://burger-67864.firebaseio.com/totalPrice.json')
			.then(res => {
				dispatch(setTotalPrice(res.data))
			})
			.catch(err => {
				dispatch(setFetchFailedError(err.message))
			})
	}
}

