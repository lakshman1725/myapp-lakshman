import { combineReducers } from "redux";
import todolistreducer from "./todolist.reducer";
import counterreducer from "./counter.reducer";
import Productreducer from "./product.reducer";
import Countriesreducer from "./countries.reducer";


let reducer=combineReducers({todolistreducer,counterreducer,Productreducer,Countriesreducer})
export default reducer
