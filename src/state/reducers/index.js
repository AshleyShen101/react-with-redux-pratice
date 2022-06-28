// combine all reducers in this file
import { combineReducers } from "reddux";
import accountReducer from "./accountReducer";

// combineReducers takes all reducers that we want to combine as params (object)
const reducers = combineReducers({
    // key -- account; value -- accountReducer
    account: accountReducer;
});

export default reducers;