import { useTodos } from '@/features/todo/TodoProvider';
import TodoItem from '@/entities/todo/TodoItem';

const TodoList = () => {
  const { todos, filter } = useTodos();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // all
  });

  return (
    <div>
      {filteredTodos.length === 0 ? (
        <p>할 일이 없습니다.</p>
      ) : (
        filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;
