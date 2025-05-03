import { createContext, useContext, useState, ReactNode } from 'react';

import type { Todo } from '@/entities/todo/types';
import { useLocalStorage } from '@/shared/hooks/useLocalStorage';

type Filter = 'all' | 'active' | 'completed'; // 필터 타입

type TodoContextType = {
  todos: Todo[];
  filter: Filter;
  setFilter: (filter: Filter) => void;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

const TodoContext = createContext<TodoContextType | null>(null);

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos는 TodoProvider 안에서 사용해야 합니다.');
  }
  return context;
};

type Props = {
  children: ReactNode;
};

export const TodoProvider = ({ children }: Props) => {
  const [filter, setFilter] = useState<Filter>('all');
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  const removeTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, filter, setFilter, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
