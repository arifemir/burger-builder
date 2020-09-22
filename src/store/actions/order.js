import * as actionTypes from './actionTypes'
import axios from '../../axiosOrders'

export const purchaseBurgerSuccess = (id, orderData) => {
	return {
		type: actionTypes.PURCHASE_BURGER_SUCCESS,
		orderId: id,
		orderData
	}
}

export const purchaseBurgerFail = error => {
	return {
		type: actionTypes.PURCHASE_BURGER_FAIL,
		error
	}
}

export const purchaseBurgerStart = orderData => {
	return dispatch => {
		axios
			.post('/orders.json', orderData)
			.then(res => {
				dispatch(purchaseBurgerSuccess(response.data, orderData))
			})
			.catch(err => {
				dispatch(purchaseBurgerFail(error.message))
			})
	}
}
