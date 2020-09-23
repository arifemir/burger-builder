import { combineReducers } from 'redux'
import burgerBuilderReducer from './burgerBuilder'
import modalReducer from './modal'
import orderReducer from './order'

const rootReducer = combineReducers({
	burgerBuilderReducer,
	modalReducer,
	orderReducer
})

export default rootReducer
