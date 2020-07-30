import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector( state => state.isLogged );
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter : {counter} </h1>
      { isLogged ? <h3> Valuable Information I shouldn't see</h3> : '' }
      
      <button onClick={() => dispatch(increment())}>+</button>
      <span>&nbsp;</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
