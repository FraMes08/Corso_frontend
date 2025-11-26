import React, { useState, useEffect } from 'react';
import TodoList from './components/organisms/TodoList';
import TodoForm from './components/organisms/TodoForm';
import Button from './components/atoms/Button';

const generateId = () => Date.now();

const App = () => {
  //impostazioni default
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); 
  const [theme, setTheme] = useState('light');

  //gestione temi
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  //crud varie
  const addTodo = (text) => {
    const newTodo = {
      id: generateId(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]); 
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };
  
  //sorting dei todo (sia per creazione che alfabetico)
  const sortTodos = (type) => {
      setTodos(prevTodos => {
          const sorted = [...prevTodos];
          if (type === 'date') {
              sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          } else if (type === 'alpha') {
              sorted.sort((a, b) => a.text.localeCompare(b.text));
          }
          return sorted;
      });
  };

  //pagina effettiva
  return (
    <div className="container">
      <header className="header">
        <h1 className="app-title">
          Advanced ToDo 📝
        </h1>
        <Button onClick={toggleTheme} variant="secondary">
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </Button>
      </header>

      <div className="sort-group">
          <Button onClick={() => sortTodos('date')} variant="text">
              Ordina per Data
          </Button>
          <Button onClick={() => sortTodos('alpha')} variant="text">
              Ordina A-Z
          </Button>
      </div>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        filter={filter}
        setFilter={setFilter}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
      
    </div>
  );
};

export default App;