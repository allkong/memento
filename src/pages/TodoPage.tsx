import { TodoProvider } from '@/features/todo/TodoProvider';
import TodoAddForm from '@/features/todo/TodoAddForm';
import TodoList from '@/features/todo/TodoList';

const TodoPage = () => {
  return (
    <TodoProvider>
      <h2>📝 Todo 앱</h2>
      <TodoAddForm />
      <TodoList />
    </TodoProvider>
  );
};

export default TodoPage;
