import React, { useState, useEffect } from 'react';
import { Todo, TodoFilter } from './types';
import { createTodo, saveTodosToLocalStorage, loadTodosFromLocalStorage } from './utils';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoFilterComponent from './components/TodoFilter';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>('all');

  useEffect(() => {
    const savedTodos = loadTodosFromLocalStorage();
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  const addTodo = (text: string) => {
    if (text.trim()) {
      const newTodo = createTodo(text);
      setTodos(prev => [...prev, newTodo]);
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo App</h1>
      </header>
      
      <main className="app-main">
        <TodoInput onAddTodo={addTodo} />
        
        <div className="todo-stats">
          <span>{activeCount} items left</span>
          {completedCount > 0 && (
            <button onClick={clearCompleted} className="clear-completed">
              Clear completed
            </button>
          )}
        </div>
        
        <TodoFilterComponent currentFilter={filter} onFilterChange={setFilter} />
        
        <TodoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
        />
      </main>
    </div>
  );
};

export default App;