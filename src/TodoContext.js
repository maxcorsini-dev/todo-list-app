import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Errore nel caricamento dei promemoria:', error);
      });
  }, []);

  const markAsCompleted = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, markAsCompleted, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
