import { combineReducers } from "redux";
import { cartReducer } from "./reducer";
import {userReducer} from './userReducer'


const rootReducer = combineReducers({
    cartReducer,
    userReducer

});

export default rootReducer;