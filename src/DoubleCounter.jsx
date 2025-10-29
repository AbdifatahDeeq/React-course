import { useReducer } from "react";
const initialState = {counterA :0, counterB: 0,}
const reducer = (state, action) => {
  switch (action.type) {
    case "increment_A":
      return { ...state, counterA: state.counterA + 1 };
    case "decrement_A":
      return {
        ...state,
        counterA: state.counterA > 0 ? state.counterA - 1 : 0,
      };

    case "increment_B":
      return { ...state, counterB: state.counterB + 1 };
    case "decrement_B":
      return {
        ...state,
        counterB: state.counterB > 0 ? state.counterB - 1 : 0,
      };
    case "reset":
      return initialState;
  }
};
 const DoubleCounter =()=>{
  const [state, dispatch] = useReducer(reducer, initialState); 


  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        <div>
          Counter: {state.counterA}
          <button onClick={() => dispatch({ type: "increment_A" })}>A+</button>
          <button
            onClick={() => dispatch({ type: "decrement_A" })}
            disabled={state.counterA === 0}
          >
            A-
          </button>
        </div>
        <div>
          Counter: {state.counterB}
          <button onClick={() => dispatch({ type: "increment_B" })}>A+</button>
          <button
            onClick={() => dispatch({ type: "decrement_B" })}
            disabled={state.counterB === 0}
          >
            A-
          </button>
        </div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </h1>
    </div>
  );
  }
 
export default DoubleCounter;