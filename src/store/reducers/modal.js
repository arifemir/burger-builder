import * as actionTypes from '../actions/actionTypes'

const initialState = {
	purchasing: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ORDER_NOW_OPEN: {
			const newState = { ...state }
			newState.purchasing = true
			return newState
		}
		case actionTypes.ORDER_NOW_CLOSE: {
			const newState = { ...state }
			newState.purchasing = false
			return newState
		}
		default:
			return state
	}
}

export default reducer
