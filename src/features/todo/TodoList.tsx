import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { useTodos } from '@/features/todo/TodoProvider';

import TodoItem from '@/entities/todo/TodoItem';

const TodoList = () => {
  const { todos, filter } = useTodos();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // ItemRenderer: react-window가 각 항목을 렌더링할 때 호출
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const todo = filteredTodos[index];
    return (
      <div style={style}>
        <TodoItem todo={todo} />
      </div>
    );
  };

  return (
    <div style={{ height: '400px' }}>
      <AutoSizer>
        {({ height, width }: { height: number; width: number }) => (
          <List height={height} itemCount={filteredTodos.length} itemSize={60} width={width}>
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default TodoList;
