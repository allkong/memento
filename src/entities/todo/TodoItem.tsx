import type { Todo } from '@/entities/todo/todo.type';

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} readOnly />
      <span>{todo.text}</span>
    </div>
  );
};

export default TodoItem;
