import type { Todo } from '@/entities/todo/types';

import TodoItem from '@/entities/todo/TodoItem';

const mockTodos: Todo[] = [
  { id: '1', text: '첫 번째 할 일', completed: false },
  { id: '2', text: '두 번째 할 일', completed: true },
];

const TodoTestPage = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>TodoItem 테스트</h2>
      {mockTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoTestPage;
