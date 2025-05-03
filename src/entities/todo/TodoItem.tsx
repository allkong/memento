import { useState } from 'react';

import { Todo } from '@/entities/todo/types';
import { Wrapper, Text, RemoveButton } from '@/entities/todo/TodoItem.style';
import { useTodoActions } from '@/features/todo/TodoProvider';

import ConfirmModal from '@/shared/ui/ConfirmModal';

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  const { toggleTodo, removeTodo } = useTodoActions();
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <Wrapper>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        <Text completed={todo.completed}>{todo.text}</Text>
        <RemoveButton onClick={() => setShowConfirm(true)}>삭제</RemoveButton>
      </Wrapper>
      {showConfirm && (
        <ConfirmModal
          message={`"${todo.text}" 항목을 삭제하시겠습니까?`}
          onConfirm={() => {
            removeTodo(todo.id);
            setShowConfirm(false);
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
};

export default TodoItem;
