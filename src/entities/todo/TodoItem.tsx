import { Todo } from '@/entities/todo/types';
import { Wrapper, Text, RemoveButton } from '@/entities/todo/TodoItem.style';
import { useTodos } from '@/features/todo/TodoProvider';

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <Wrapper>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <Text completed={todo.completed}>{todo.text}</Text>
      <RemoveButton onClick={() => removeTodo(todo.id)}>삭제</RemoveButton>
    </Wrapper>
  );
};

export default TodoItem;
