import {AUTH_SUCCESS, AUTH_FAIL, AUTH_START, AUTH_LOGOUT, AUTH_FOR_ORDER, AUTH_INIT_LOGOUT, AUTH_CHECK_TIMEOUT, INIT_AUTH, INIT_AUTH_CHECK_STORE} from './actionTypes'

export const authStart = () => Object({ type: AUTH_START })
export const authSuccess = (idToken, localId) => Object({ type: AUTH_SUCCESS, idToken, localId })
export const authFail = (error) => Object({ type: AUTH_FAIL, error })
export const logout = () => Object({ type: AUTH_INIT_LOGOUT })
export const logoutSucceed = () => Object({ type: AUTH_LOGOUT })
export const checkAuthTimeout = (expiresIn) => Object({ type: AUTH_CHECK_TIMEOUT, expiresIn })
export const auth = (email, password, isSignup) => Object({ type: INIT_AUTH, email, password, isSignup })
export const authForOrder = () => Object({ type: AUTH_FOR_ORDER })
export const authCheckStore = () => Object({ type: INIT_AUTH_CHECK_STORE })
