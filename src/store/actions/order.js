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

export const purchaseBurgerBeforeStart = () => {
	return {
		type: actionTypes.PURCHASE_BURGER_BEFORE_START
	}
}

export const purchaseBurgerStart = orderData => {
	return dispatch => {
		dispatch(purchaseBurgerBeforeStart())
		axios
			.post('/orders.json', orderData)
			.then(res => {
				dispatch(purchaseBurgerSuccess(res.data.name, orderData))
			})
			.catch(err => {
				dispatch(purchaseBurgerFail(err.message))
			})
	}
}

export const purchaseInit = () => {
	return {
		type: actionTypes.PURCHASE_INIT
	}
}

export const fetchOrdersSuccess = orders => {
	return {
		type: actionTypes.FETCH_ORDERS_SUCCESS,
		orders: orders
	}
}

export const fetchOrdersFail = error => {
	return {
		type: actionTypes.FETCH_ORDERS_FAIL,
		error
	}
}

export const fetchOrdersBeforeStart = () => {
	return {
		type: actionTypes.FETCH_ORDERS_BEFORE_START
	}
}

export const fetchOrderStart = () => {
	return dispatch => {
		dispatch(fetchOrdersBeforeStart())
		axios
			.get('/orders.json')
			.then(res => {
				const fetchedOrders = []
				for (let key in res.data) {
					fetchedOrders.push(res.data[key])
				}
				dispatch(fetchOrdersSuccess(fetchedOrders))
			})
			.catch(err => {
				dispatch(fetchOrdersFail(err.name))
			})
	}
}
