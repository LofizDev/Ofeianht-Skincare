import { combineReducers } from "redux";
import shopReducer from './shopping/Shopping-reducer'

const rootReducer = combineReducers({
    shop:shopReducer
})

export default rootReducer