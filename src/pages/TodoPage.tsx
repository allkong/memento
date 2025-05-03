import { TodoProvider } from '@/features/todo/TodoProvider';
import TodoList from '@/features/todo/TodoList';
import TodoAddForm from '@/features/todo/TodoAddForm';
import FilterSelector from '@/features/todo/FilterSelector';

const TodoPage = () => {
  return (
    <TodoProvider>
      <h2>📝 Todo 앱</h2>
      <TodoAddForm />
      <FilterSelector />
      <TodoList />
    </TodoProvider>
  );
};

export default TodoPage;
