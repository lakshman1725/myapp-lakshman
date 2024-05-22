import { combineReducers } from "redux";
import todolistreducer from "./todolist.reducer";
import counterreducer from "./counter.reducer";
import Productreducer from "./product.reducer";


let reducer=combineReducers({todolistreducer,counterreducer,Productreducer})
export default reducer
