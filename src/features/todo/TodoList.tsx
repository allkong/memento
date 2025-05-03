import { useTodos } from './TodoProvider';
import TodoItem from '@/entities/todo/TodoItem';

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
