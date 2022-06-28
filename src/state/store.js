import { createStore } from "redux";
import reducers from "./reducers/index";

// params: reducers; the default state
export const store = createStore(
    reducers, 
    {}
)