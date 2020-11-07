import {AUTH_SUCCESS, AUTH_FAIL, AUTH_START, AUTH_LOGOUT, AUTH_FOR_ORDER, AUTH_INIT_LOGOUT, AUTH_CHECK_TIMEOUT, INIT_AUTH} from './actionTypes'

export const authStart = () => {
  return {
    type: AUTH_START
  }
}

export const authSuccess = (idToken, localId) => {
  return {
    type: AUTH_SUCCESS,
    idToken,
    localId
  }
}

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error
  }
}

export const logout = () => {
  return {type: AUTH_INIT_LOGOUT}
}

export const logoutSucceed = () => {
  return {type: AUTH_LOGOUT}
}

export const checkAuthTimeout = (expiresIn) => {
  return {type: AUTH_CHECK_TIMEOUT, expiresIn}
}

export const auth = (email, password, isSignup) => {
  return {type: INIT_AUTH, email, password, isSignup}
}

export const authForOrder = () => {
  return {
    type: AUTH_FOR_ORDER
  }
}

export const authCheckStore = () => {
  return dispatch => {
    const token = localStorage.getItem('token');

    if(!token) {
      dispatch(logout());
    } else {
      const expirationDate =new Date(localStorage.getItem('expirationDate'));
      if(expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const localId = localStorage.getItem('localId');
        dispatch(authSuccess(token, localId));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 100));
      }
    }

  }
}
