import TodoItem from '../molecules/TodoItem';
import FilterGroup from '../molecules/FilterGroup';

const TodoList = ({ todos, filter, setFilter, toggleComplete, deleteTodo, editTodo }) => {
  
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    }
    if (filter === 'completed') {
      return todo.completed;
    }
    return true; 
  });

  const remainingCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-list-container">
      <h2 className="app-title" style={{ fontSize: '1.5rem' }}>Task List</h2>
      
      <FilterGroup filter={filter} setFilter={setFilter} />
      
      <div className="todo-list-content">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))
        ) : (
          <p className="text-center" style={{ color: 'var(--color-text-secondary)', padding: '1rem' }}>
            Nessun task {filter === 'active' ? 'attivo' : filter === 'completed' ? 'completato' : ''} da visualizzare.
          </p>
        )}
      </div>

      <div className="todo-count">
        <strong style={{ fontWeight: 800 }}>{remainingCount}</strong> task rimanenti.
      </div>
    </div>
  );
};

export default TodoList;