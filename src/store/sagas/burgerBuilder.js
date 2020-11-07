import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from '../../axiosOrders';

function* initIngredientSaga() {
  try {
    let res = yield axios.get('/ingredients.json')
		yield put(actions.setIngredients(res.data))
  } catch (err) {
		yield put(actions.setFetchFailedError(err.message))
  }
}

function* initTotalPriceSaga() {
  try {
    let res = yield axios.get('/totalPrice.json')
    yield put(actions.setTotalPrice(res.data))
  } catch (err) {
	  yield	put(actions.setFetchFailedError(err.message))
	}
}

export { 
  initIngredientSaga,
  initTotalPriceSaga
}