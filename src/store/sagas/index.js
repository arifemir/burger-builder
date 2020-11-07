import { takeEvery } from 'redux-saga/effects';

import { AUTH_CHECK_TIMEOUT, AUTH_INIT_LOGOUT } from '../actions/actionTypes'
import { checkAuthTimeoutSaga, logoutSaga } from './auth'

function* watchAuth() {
  yield takeEvery(AUTH_INIT_LOGOUT, logoutSaga);
  yield takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
}

export { 
  watchAuth
}