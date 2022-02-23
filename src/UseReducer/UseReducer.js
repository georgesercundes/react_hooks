import React, { useReducer } from "react";

export default function Reducer() {
    const [state, dispatch] = useReducer(reducer,
        { count: 0, text: "even" })

    function reducer(state, action) {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1, text: state.text }
            case "toggleText":
                return { count: state.count, text: state.text === "even" ? "odd" : "even" }
            default:
                return state
        }
    }

    return (
        <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "increment" })
                    dispatch({ type: "toggleText" })
                }}>
                Click here
            </button>
            {<p>{state.text}</p>}
        </div>
    )
}