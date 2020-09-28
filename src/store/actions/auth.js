import {AUTH_SUCCESS, AUTH_FAIL, AUTH_START} from './actionTypes'

export const authStart = () => {
  console.log('auth start')
  return {
    type: AUTH_START
  }
}

export const authSuccess = (authData) => {
  return {
    type: AUTH_SUCCESS,
    authData: authData
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

  }
}
