import React, { useContext } from 'react';
import TodoContext from './TodoContext';

const TodoList = () => {
  const { todos, markAsCompleted, deleteTodo } = useContext(TodoContext);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>
          <button onClick={() => markAsCompleted(todo.id)}>Completato</button>
          <button onClick={() => deleteTodo(todo.id)}>Elimina</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
