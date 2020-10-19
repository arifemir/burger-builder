import reducer from './auth'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  idToken: null,
  localId: null,
  error: null,
  loading: false,
  isAuthForOrder: false
};

describe('auth reducer', () => {
  it ('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it ('should store the token upon login', () => {
    expect(reducer(initialState,{
        type: actionTypes.AUTH_SUCCESS,
        idToken: 'some-token',
        localId: 'some-local'
    }))
    .toEqual({
      ...initialState,
      idToken: 'some-token',
      localId: 'some-local'
    })
  })
})