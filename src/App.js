import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./actions/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  let number = 1;
  return (
    <div className="App">
      <div>Value of counter : {counter}</div>

      <button onClick={() => dispatch(increment(number))}>INCREMENT</button>
      <button onClick={() => dispatch(decrement(number))}>DECREMENT</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </div>
  );
}

export default App;
