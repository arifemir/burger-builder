import {INIT_FETCH_ORDERS, FETCH_ORDERS_BEFORE_START, FETCH_ORDERS_SUCCESS, PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAIL, PURCHASE_BURGER_BEFORE_START, INIT_PURCHASE_BURGER, PURCHASE_INIT, FETCH_ORDERS_FAIL} from './actionTypes'

export const purchaseBurgerSuccess = (id, orderData) => Object({ type: PURCHASE_BURGER_SUCCESS, orderId: id, orderData })
export const purchaseBurgerFail = error => Object({ type: PURCHASE_BURGER_FAIL, error })
export const purchaseBurgerBeforeStart = () => Object({ type: PURCHASE_BURGER_BEFORE_START })
export const purchaseBurgerStart = (orderData, token) => Object({ type: INIT_PURCHASE_BURGER, orderData, token })
export const purchaseInit = () => Object({ type: PURCHASE_INIT })
export const fetchOrdersSuccess = orders => Object({ type: FETCH_ORDERS_SUCCESS, orders: orders })
export const fetchOrdersFail = error => Object({ type: FETCH_ORDERS_FAIL, error })
export const fetchOrdersBeforeStart = () => Object({ type: FETCH_ORDERS_BEFORE_START })
export const fetchOrderStart = (token, localId) => Object({ type: INIT_FETCH_ORDERS, token, localId })
