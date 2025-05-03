import { useMemo, useState } from 'react';

// useMemo vs 일반 계산 비교
const heavyCalculation = (num: number) => {
  console.log('💥 무거운 계산 실행');
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += i * num;
  }
  return result;
};

const ExpensiveCalc = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);

  // ❌ 일반 계산
  // 컴포넌트가 리렌더링(버튼 클릭)될 때마다 input 값이 바뀌지 않아도 불필요한 무거운 계산 실행
  // const result = heavyCalculation(input);

  // ✅ useMemo로 캐싱
  // input 값이 바뀔 때만 무거운 계산 실행
  // 리렌더링(버튼 클릭)되어도 캐싱된 result 값 재사용
  const result = useMemo(() => heavyCalculation(input), [input]);

  return (
    <div style={{ padding: 20 }}>
      <h2>useMemo 무거운 연산 캐싱 실험</h2>
      <input type="number" value={input} onChange={e => setInput(Number(e.target.value))} />
      <p>계산 결과: {result}</p>
      {/* 리렌더링 용도 */}
      <button onClick={() => setCount(c => c + 1)}>count: {count}</button>
    </div>
  );
};

export default ExpensiveCalc;
