import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import { thunk } from "redux-thunk";
import details from "./product.json"
console.log(details)
var store=createStore(reducer,applyMiddleware(thunk))
export default store
