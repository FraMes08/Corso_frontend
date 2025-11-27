import { useState } from 'react';
import Checkbox from '../atoms/Checkbox';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const DeleteIcon = () => <>🗑️</>;
const EditIcon = () => <>✏️</>;
const SaveIcon = () => <>💾</>;

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      editTodo(todo.id, editText);
    }
    setIsEditing(false);
  };

  const itemClass = todo.completed ? 'todo-item todo-item-completed' : 'todo-item';

  return (
    <div className={itemClass}>
      <div className="todo-item-text-container">
        <Checkbox
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />

        <div className="text-content">
          {isEditing ? (
            <Input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              placeholder="Modifica task..."
            />
          ) : (
            <p className="todo-item-text">
              {todo.text}
            </p>
          )}
          <small className="todo-item-date">
            Creato il {new Date(todo.createdAt).toLocaleDateString('it-IT')}
          </small>
        </div>
      </div>

      <div className="todo-item-actions">
        {isEditing ? (
          <Button onClick={handleEdit} variant="primary">
            <SaveIcon />
          </Button>
        ) : (
          <Button onClick={() => setIsEditing(true)} variant="primary" disabled={todo.completed}>
            <EditIcon />
          </Button>
        )}

        <Button onClick={() => deleteTodo(todo.id)} variant="danger">
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;