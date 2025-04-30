import { useEffect, useState } from 'react';

// setInterval, addEventListener 등 외부 자원 정리 실습
const Cleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 일정 시간마다 callback 함수를 반복 실행
    const interval = setInterval(() => {
      console.log('⏱️ 1초마다 count 증가');
      setCount(c => c + 1);
    }, 1000);

    return () => {
      console.log('🧹 clearInterval 실행됨');
      // 외부 리소스나 비동기 작업을 정리
      // 컴포넌트가 언마운트되거나 의존성 배열이 변경될 때 실행
      // 여기서는 타이머를 제거 (타이머를 제거하지 않으면 컴포넌트가 사라졌는데도 setInterval이 계속 실행되어 불필요한 작업 반복 및 메모리 누수 발생)
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>useEffect Cleanup 실험</h2>
      <p>Count: {count}</p>
    </div>
  );
};

export default Cleanup;
