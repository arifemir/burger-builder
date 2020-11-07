import { takeEvery } from 'redux-saga/effects';

import { AUTH_CHECK_TIMEOUT, AUTH_INIT_LOGOUT, INIT_AUTH } from '../actions/actionTypes'
import { checkAuthTimeoutSaga, logoutSaga, authSaga } from './auth'

function* watchAuth() {
  yield takeEvery(AUTH_INIT_LOGOUT, logoutSaga);
  yield takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(INIT_AUTH, authSaga);
}

export { 
  watchAuth
}