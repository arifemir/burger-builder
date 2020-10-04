import * as actionTypes from '../actions/actionTypes'

const initialState = {
  idToken: null,
  localId: null,
  error: null,
  loading: false,
  isAuthForOrder: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START : {
      return {
        ...state,
        error: null,
        loading: true
      }
    }
    case actionTypes.AUTH_SUCCESS : {
      return {
        ...state,
        error: null,
        loading: false,
        idToken: action.idToken,
        localId: action.localId
      }
    }
    case actionTypes.AUTH_FAIL : {
      return {
        ...state,
        error: action.error,
        loading: false
      }
    }
    case actionTypes.AUTH_LOGOUT : {
      return {
        ...state,
        idToken: null,
        localId: null,
        isAuthForOrder: false
      }
    }
    case actionTypes.AUTH_FOR_ORDER: {
      return {
        ...state,
        isAuthForOrder: true
      }
    }
    default :
      return state
  }
}

export default reducer
