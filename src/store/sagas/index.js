import { takeEvery } from 'redux-saga/effects';

import { AUTH_CHECK_TIMEOUT, AUTH_INIT_LOGOUT, INIT_AUTH, INIT_AUTH_CHECK_STORE } from '../actions/actionTypes'
import { checkAuthTimeoutSaga, logoutSaga, authSaga, authCheckStateSaga } from './auth'

function* watchAuth() {
  yield takeEvery(AUTH_INIT_LOGOUT, logoutSaga);
  yield takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(INIT_AUTH, authSaga);
  yield takeEvery(INIT_AUTH_CHECK_STORE, authCheckStateSaga)
}

export { 
  watchAuth
}