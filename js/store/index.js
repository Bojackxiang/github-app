import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import combinedReducers from '../reducer/index'

const middleWares = [thunk, logger]

// export default createStore(combinedReducers, composeEnhancers(applyMiddleware(...middleWares)))
export default createStore(combinedReducers, applyMiddleware(...middleWares))