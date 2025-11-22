import { useReducer } from "react";

interface CounterState {
  count: number;
}

type CounterAction =
  | { type: "increment"; step?: number }
  | { type: "decrement"; step?: number }
  | { type: "reset" };

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + (action.step ?? 1) };
    case "decrement":
      return { count: state.count - (action.step ?? 1) };
    case "reset":
      return { count: 0 };
    default: {
      const exhaustive: never = action;
      throw new Error(`Unhandled action: ${exhaustive}`);
    }
  }
}

export function ReducerCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="reducer-counter">
      <p>Count: {state.count}</p>
      <div>
        <button type="button" onClick={() => dispatch({ type: "increment" })}>
          +1
        </button>
        <button type="button" onClick={() => dispatch({ type: "decrement" })}>
          -1
        </button>
        <button type="button" onClick={() => dispatch({ type: "increment", step: 5 })}>
          +5
        </button>
        <button type="button" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </div>
  );
}

