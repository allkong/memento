import { useMemo, useState } from 'react';
import MemoizedChild from './MemoizedChild';

const heavyCalculation = (num: number) => {
  console.log('💥 무거운 계산 실행');
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += i * num;
  }
  return result;
};

const ParentWithMemo = () => {
  const [input, setInput] = useState(1);
  const [count, setCount] = useState(0);

  // ❌ 캐싱하지 않음
  // const calculatedValue = heavyCalculation(input);

  // ✅ 무거운 계산 결과 캐싱
  const calculatedValue = useMemo(() => heavyCalculation(input), [input]);

  return (
    <div style={{ padding: 20 }}>
      <h2>useMemo + React.memo 조합 실험</h2>
      <input type="number" value={input} onChange={e => setInput(Number(e.target.value))} />
      <button onClick={() => setCount(c => c + 1)}>count: {count}</button>

      <MemoizedChild value={calculatedValue} />
    </div>
  );
};

export default ParentWithMemo;
