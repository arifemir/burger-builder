import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions';

function* logoutSaga() {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('localId');
  yield put(actions.logoutSucceed)
}

function* checkAuthTimeoutSaga(action) {
  delay(1000 * action.expiresIn);
  yield put(actions.logout);
}

export { 
  logoutSaga,
  checkAuthTimeoutSaga
}
