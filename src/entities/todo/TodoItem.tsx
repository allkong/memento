import type { Todo } from '@/entities/todo/types';
import { Wrapper, Text } from '@/entities/todo/TodoItem.style';

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  return (
    <Wrapper>
      <input type="checkbox" checked={todo.completed} readOnly />
      <Text completed={todo.completed}>{todo.text}</Text>
    </Wrapper>
  );
};

export default TodoItem;
