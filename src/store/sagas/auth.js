import {put} from 'redux-saga/effects';
import {AUTH_LOGOUT} from '../actions/actionTypes';

function* logoutSaga() {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('localId');
  yield put({type: AUTH_LOGOUT})
}

export { 
  logoutSaga
}
