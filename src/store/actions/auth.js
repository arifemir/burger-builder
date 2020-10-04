import {AUTH_SUCCESS, AUTH_FAIL, AUTH_START, AUTH_LOGOUT, AUTH_FOR_ORDER} from './actionTypes'
import axios from 'axios'

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
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('localId');
  return {
    type: AUTH_LOGOUT
  }
}

export const checkAuthTimeout = (expiresIn) => {
  return dispatch => {
    setTimeout(() => {
      console.log('expireIn force logout')
      dispatch(logout())
    }, expiresIn * 1000)
  }
}

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart())
    const authData = {
      email,
      password,
      returnSecureToken: true
    }
    const url =
      `https://identitytoolkit.googleapis.com/v1/accounts:${isSignup ? 'signUp' : 'signInWithPassword'}?key=AIzaSyBkCQZa0wa4QZAP1xEvL2vsao9Mk-Wh1oA`

    axios
      .post(url, authData)
      .then(res => {
        const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
        localStorage.setItem('token', res.data.idToken);
        localStorage.setItem('localId', res.data.localId);
        localStorage.setItem('expirationDate', expirationDate)
        dispatch(authSuccess(res.data.idToken, res.data.localId))
        dispatch(checkAuthTimeout(res.data.expiresIn))
      })
      .catch(err => {
        console.log(err.response.data.error)
        dispatch(authFail(err.response.data.error.message))
      })
  }
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
