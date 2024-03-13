// src/App.js
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoEditForm from './TodoEditForm.js';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const saveTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingTodo(todoToEdit);
  };

  const completeTodo = (id, text) => {
    console.log(todos.text);
    console.log(text);
    
    // const element = id;
    // element.classList.toggle("crossed-line");
    // setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditSave = (editedText, id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editedText } : todo
    );
    setTodos(updatedTodos);
    setEditingTodo(null);
  };

  return (
    <div className="App">
      <h1>Список задач</h1>
      <TodoForm saveTodo={saveTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} completeTodo={completeTodo} />
      {editingTodo && (
        <TodoEditForm
          todo={editingTodo}
          saveEditedTodo={(editedText) => handleEditSave(editedText, editingTodo.id)}
          cancelEdit={() => setEditingTodo(null)}
        />
      )}
      
    </div>
  );
};

export default App;