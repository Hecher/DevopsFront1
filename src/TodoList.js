// src/TodoList.js
import React from 'react';

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
          <button onClick={() => editTodo(todo.id)}>Редактировать</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;