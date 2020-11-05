import { takeEvery } from 'redux-saga/effects';

import { AUTH_INIT_LOGOUT } from '../actions/actionTypes'
import { logoutSaga } from './auth'

function* watchAuth() {
  yield takeEvery(AUTH_INIT_LOGOUT, logoutSaga)
}

export { 
  watchAuth
}