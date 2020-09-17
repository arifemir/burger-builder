import { combineReducers } from 'redux'
import burgerBuilderReducer from './burgerBuilder'
import modalReducer from './modal'

const rootReducer = combineReducers({
	burgerBuilderReducer,
	modalReducer
})

export default rootReducer
