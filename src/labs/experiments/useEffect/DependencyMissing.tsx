import { useEffect, useState } from 'react';

// 의존성 배열 누락 문제
const DependencyMissing = () => {
  const [text, setText] = useState('');
  const [logCount, setLogCount] = useState(0);

  const logText = () => {
    console.log(`📝 현재 텍스트: ${text}`);
    setLogCount(c => c + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      logText();
    }, 2000);

    return () => clearInterval(interval);
    // 외부 변수를 참조했지만, 의존성 배열에 그 변수를 넣지 않음
    // 의존성 누락 시에 useEffect가 stale한(오래된) 값을 참조
    // input에 입력한 text 값이 console에 출력되는 text에 반영되지 않음
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>useEffect 의존성 누락 실험</h2>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="텍스트 입력" />
      <p>Log count: {logCount}</p>
    </div>
  );
};

export default DependencyMissing;
