// src/TodoForm.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      saveTodo(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="Добавить задачу"
        margin="normal"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Добавить
      </Button>
    </form>
  );
};

export default TodoForm;