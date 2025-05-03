import { createContext, useContext, useState, ReactNode } from 'react';

import type { Todo } from '@/entities/todo/types';

type TodoContextType = {
  todos: Todo[];
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
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: '첫 번째 할 일', completed: false },
    { id: '2', text: '두 번째 할 일', completed: true },
  ]);

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
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
