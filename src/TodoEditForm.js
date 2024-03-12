// src/TodoEditForm.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TodoEditForm = ({ todo, saveEditedTodo, cancelEdit }) => {
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    saveEditedTodo(editedText);
  };

  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="Редактировать задачу"
        margin="normal"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Сохранить
      </Button>
      <Button variant="outlined" color="secondary" onClick={cancelEdit}>
        Отмена
      </Button>
    </div>
  );
};

export default TodoEditForm;