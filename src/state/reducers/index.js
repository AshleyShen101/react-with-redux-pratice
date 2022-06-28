// combine all reducers in this file
import { combineReducers } from "redux";
import accountReducer from "./accountReducers";

// combineReducers takes all reducers that we want to combine as params (object)
const reducers = combineReducers({
    // key -- account; value -- accountReducer
    account: accountReducer
});

export default reducers;