import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

//reducer
import { initialState, reducer } from './reducers/reducer'

//components
import Form from './components/form'
import List from './components/list'

function App() {
  const [ state, dispatch ] = useReducer( reducer, initialState );

  return (
    <div className="App">
      <Form dispatch={dispatch}/>
      <List dispatch={dispatch} todos={state.todoArray} />
    </div>
  )
}

export default App;
