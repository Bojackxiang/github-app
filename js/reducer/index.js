import { combineReducers } from "redux";
import themeReducer from './reducers/theme'
import popularReducer from './reducers/popular'

const combinedReducers = combineReducers({
    theme: themeReducer,
    popular: popularReducer
})

export default combinedReducers
