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
        console.log(res)
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
