import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios'

function* logoutSaga() {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('localId');
  yield put(actions.logoutSucceed())
}

function* checkAuthTimeoutSaga(action) {
  console.log(action.expiresIn)
  yield delay(10 * action.expiresIn);
  yield put(actions.logout);
  console.log('cikis')
}

function* authSaga(action) {
  yield put(actions.authStart())
  const { email, password, isSignup } = action;
  const authData = { email, password, returnSecureToken: true }
  const url =
    `https://identitytoolkit.googleapis.com/v1/accounts:${isSignup ? 'signUp' : 'signInWithPassword'}?key=AIzaSyBkCQZa0wa4QZAP1xEvL2vsao9Mk-Wh1oA`
  try {
    let res = yield axios.post(url, authData)
    const expirationDate = yield new Date(new Date().getTime() + res.data.expiresIn * 1000)
    yield localStorage.setItem('token', res.data.idToken);
    yield localStorage.setItem('localId', res.data.localId);
    yield localStorage.setItem('expirationDate', expirationDate)
    yield put(actions.authSuccess(res.data.idToken, res.data.localId))
    yield put(actions.checkAuthTimeout(res.data.expiresIn))
  } catch (err) {
    console.log(err.response.data.error)
    yield put(actions.authFail(err.response.data.error.message)) 
  }      
}

function* authCheckStateSaga() {
  const token = yield localStorage.getItem('token');
  if(!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
    if(expirationDate <= new Date()) {
      yield put(actions.logout());
    } else {
      const localId = yield localStorage.getItem('localId');
      yield put(actions.authSuccess(token, localId));
      yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 100));
    }
  }
}

export { 
  logoutSaga,
  checkAuthTimeoutSaga,
  authSaga,
  authCheckStateSaga
}
