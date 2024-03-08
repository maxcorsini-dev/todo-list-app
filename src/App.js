import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';

const App = () => {
  return (
    <TodoProvider>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className="Promemoria-header">
            <img src="/promemoria.png" className="Promemoria-logo" alt="logo-promemoria"/>
            <h1>Promemoria Massimiliano Corsini</h1>
            </div>
            <TodoList/>
        </div>
    </TodoProvider>
  );
};

export default App;
