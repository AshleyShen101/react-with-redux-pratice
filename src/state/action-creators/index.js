// house of all of actions
export const depositMoney = (amount) => {
    // create an action and dispatch it
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}