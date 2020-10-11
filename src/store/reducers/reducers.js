import { combineReducers } from 'redux'
import burgerBuilderReducer from './burgerBuilder'
import modalReducer from './modal'
import orderReducer from './order'
import authReducer from './auth'

const rootReducer = combineReducers({
	burgerBuilderReducer,
	modalReducer,
	orderReducer,
  authReducer
})

export default rootReducer
