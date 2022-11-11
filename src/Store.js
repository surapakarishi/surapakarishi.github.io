import {legacy_createStore} from "redux"
// import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./redux/reducers/rootReducer"


const Store = legacy_createStore(
    rootReducer
);

export default Store;