import { Button } from '@/features/todo/FilterSelector.style';
import { useTodos, useTodoActions } from '@/features/todo/TodoProvider';

const FilterSelector = () => {
  const { filter } = useTodos();
  const { setFilter } = useTodoActions();

  return (
    <div style={{ marginBottom: 16 }}>
      <Button active={filter === 'all'} onClick={() => setFilter('all')}>
        전체
      </Button>
      <Button active={filter === 'active'} onClick={() => setFilter('active')}>
        진행 중
      </Button>
      <Button active={filter === 'completed'} onClick={() => setFilter('completed')}>
        완료
      </Button>
    </div>
  );
};

export default FilterSelector;
