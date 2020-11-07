import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from '../../axiosOrders';

function* purchaseBurgerStartSaga(action) {
  const { token, orderData } = action;
  put(actions.purchaseBurgerBeforeStart())
  try {
    let res = yield axios.post('/orders.json?auth=' + token, orderData)
		yield put(actions.purchaseBurgerSuccess(res.data.name, orderData))
  } catch (err) {
    yield put(actions.purchaseBurgerFail(err.message))
  }
}

function* fetchOrderStartSaga(action) {
  const { token, localId } = action;
  yield put(actions.fetchOrdersBeforeStart())
  try {
    let res = yield axios.get('/orders.json?auth=' + token + '&orderBy="localId"&equalTo="' + localId + '"')
    const fetchedOrders = []
    for (let key in res.data) {
			fetchedOrders.push(res.data[key])
		}
		yield put(actions.fetchOrdersSuccess(fetchedOrders))
  } catch (err) {
    yield put(actions.fetchOrdersFail(err.name))
  }
}

export { 
  purchaseBurgerStartSaga,
  fetchOrderStartSaga
}