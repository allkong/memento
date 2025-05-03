import { memo } from 'react';

const MemoizedChild = memo(({ value }: { value: number }) => {
  console.log('🧒 자식 컴포넌트 렌더링');
  return <div>자식이 받은 값: {value}</div>;
});

export default MemoizedChild;
