import { combineReducers } from "redux";
import todolistreducer from "./todolist.reducer";
import counterreducer from "./counter.reducer";


let reducer=combineReducers({todolistreducer,counterreducer})
export default reducer
