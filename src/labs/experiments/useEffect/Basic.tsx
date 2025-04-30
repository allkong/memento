import { useEffect, useState } from 'react';

// 마운트/업데이트/언마운트 확인
const UseEffectBasic = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('🔥 마운트');

    return () => {
      console.log('💨 언마운트');
    };
  }, []);

  useEffect(() => {
    console.log(`📦 count 변경: ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 20 }}>
      <h2>useEffect 실험</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
};

export default UseEffectBasic;
