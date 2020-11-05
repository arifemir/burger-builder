import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
//router
import { BrowserRouter } from 'react-router-dom'
//redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './store/reducers/reducers'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import {watchAuth} from './store/sagas';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(watchAuth)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()
