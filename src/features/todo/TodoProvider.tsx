import { createContext, useContext, ReactNode } from 'react';

import { Todo } from '@/entities/todo/types';
import { useLocalStorage } from '@/shared/hooks/useLocalStorage';

type Filter = 'all' | 'active' | 'completed';

type TodoContextType = {
  todos: Todo[];
  filter: Filter;
};

type TodoActionsContextType = {
  setFilter: (filter: Filter) => void;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

// --- Context 분리 ---
const TodoContext = createContext<TodoContextType | null>(null);
const TodoActionsContext = createContext<TodoActionsContextType | null>(null);

// --- Hook ---
export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodos는 TodoProvider 안에서 사용해야 합니다.');
  return context;
};

export const useTodoActions = () => {
  const context = useContext(TodoActionsContext);
  if (!context) throw new Error('useTodoActions는 TodoProvider 안에서 사용해야 합니다.');
  return context;
};

// --- Provider ---
type Props = {
  children: ReactNode;
};

export const TodoProvider = ({ children }: Props) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [filter, setFilter] = useLocalStorage<Filter>('todoFilter', 'all');

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
    <TodoContext.Provider value={{ todos, filter }}>
      <TodoActionsContext.Provider value={{ setFilter, addTodo, toggleTodo, removeTodo }}>
        {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
  );
};
