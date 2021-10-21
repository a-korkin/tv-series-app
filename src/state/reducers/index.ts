import showReducer from "./showReducer";
import listShowReducer from "./listShowReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
    list: listShowReducer,
    show: showReducer
});

export default reducer;
