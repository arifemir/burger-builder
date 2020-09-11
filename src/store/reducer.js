import * as actionTypes from './actions'

const initialState = {
	ingredients: null,
	totalPrice: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_INGREDIENTS:
			break
		case actionTypes.REMOVE_INGREDIENTS: {
			break
		}
		default:
			return state
	}
}

export default reducer
