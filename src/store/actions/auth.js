import {AUTH_SUCCESS, AUTH_FAIL, AUTH_START} from './actionTypes'
import axios from 'axios'

export const authStart = () => {
  return {
    type: AUTH_START
  }
}

export const authSuccess = (authData) => {
  return {
    type: AUTH_SUCCESS,
    authData
  }
}

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error
  }
}

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart())
    const authData = {
      email,
      password,
      returnSecureToken: true
    }
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBkCQZa0wa4QZAP1xEvL2vsao9Mk-Wh1oA'
    axios
      .post(url, authData)
      .then(res => {
        console.log(res)
        dispatch(authSuccess(res.data))
      })
      .catch(err => {
        console.log(err)
        dispatch(authFail(err.message))
      })
  }
}
