// reducer takes two params: initial state; action with action type and action payload
// what the reducer does is change the state according to the action type
const reducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        // default is used to catch the state, which is not deposit and nor withdraw
        default:
            return state;
    }
};

export default reducer;