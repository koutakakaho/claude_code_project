import { Todo } from './types';

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const createTodo = (text: string): Todo => ({
  id: generateId(),
  text: text.trim(),
  completed: false,
  createdAt: new Date(),
});

export const saveTodosToLocalStorage = (todos: Todo[]): void => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const loadTodosFromLocalStorage = (): Todo[] => {
  try {
    const saved = localStorage.getItem('todos');
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }));
    }
  } catch (error) {
    console.error('Failed to load todos from localStorage:', error);
  }
  return [];
};