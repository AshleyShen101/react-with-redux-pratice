import { createStore } from "redux";
import reducers from "./reducer/index";

// params: reducers; the default state
export const store = createStore(
    reducers, 
    {}
)