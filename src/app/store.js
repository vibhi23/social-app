import userReducer from '../features/userSlice';
import {createStore} from "redux";
//import {composeWithDevTools} from "redux-devtools-extension";
//import logger from "redux-logger";

const store= createStore(userReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;
