// src/TodoList.js
import React from 'react';

const TodoList = ({ todos, deleteTodo, editTodo, completeTodo }) => {

  // const handleClick = event => {
  //   if (event.target.style.textDecoration) {
  //     event.target.style.removeProperty('text-decoration');
  //   } else {
  //     event.target.style.setProperty('text-decoration', 'line-through');
  //   }
  // }
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
          <button onClick={() => editTodo(todo.id)}>Редактировать</button>
          <button onClick={() => completeTodo(todo.id)}>Выполнено</button>
          {/* <button onClick={handleClick}>Выполнено</button> */}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;