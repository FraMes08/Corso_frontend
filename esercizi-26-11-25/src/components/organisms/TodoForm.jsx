import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const TodoForm = ({ addTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = newTodoText.trim();
    if (text) {
      addTodo(text);
      setNewTodoText(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="input-group">
        <Input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Aggiungi un nuovo task..."
        />
      </div>
      <Button type="submit" variant="primary" disabled={!newTodoText.trim()}>
        Aggiungi
      </Button>
    </form>
  );
};

export default TodoForm;