import { takeEvery } from 'redux-saga/effects';

import { AUTH_CHECK_TIMEOUT, AUTH_INIT_LOGOUT, INIT_AUTH, INIT_AUTH_CHECK_STORE,INIT_FETCH_ORDERS,INIT_INGREDIENT,INIT_PURCHASE_BURGER,INIT_TOTAL_PRICE } from '../actions/actionTypes'
import { checkAuthTimeoutSaga, logoutSaga, authSaga, authCheckStateSaga } from './auth'
import { initIngredientSaga, initTotalPriceSaga } from './burgerBuilder'
import {purchaseBurgerStartSaga, fetchOrderStartSaga} from './order'

function* watchAuth() {
  yield takeEvery(AUTH_INIT_LOGOUT, logoutSaga);
  yield takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(INIT_AUTH, authSaga);
  yield takeEvery(INIT_AUTH_CHECK_STORE, authCheckStateSaga)
}

function* watchBurgerBuilder() {
  yield takeEvery(INIT_INGREDIENT, initIngredientSaga);
  yield takeEvery(INIT_TOTAL_PRICE, initTotalPriceSaga);
}

function* watchOrder() {
  yield takeEvery(INIT_PURCHASE_BURGER , purchaseBurgerStartSaga)
  yield takeEvery(INIT_FETCH_ORDERS, fetchOrderStartSaga)
}

export {
  watchAuth,watchBurgerBuilder,watchOrder
}