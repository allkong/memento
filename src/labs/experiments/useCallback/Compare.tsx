import { memo, useCallback, useState } from 'react';

const ChildRaw = memo(({ onClick }: { onClick: () => void }) => {
  console.log('🧒 [Raw] 자식 렌더링');
  return <button onClick={onClick}>자식 (일반 함수)</button>;
});

const ChildMemo = memo(({ onClick }: { onClick: () => void }) => {
  console.log('🧒 [Memo] 자식 렌더링');
  return <button onClick={onClick}>자식 (useCallback)</button>;
});

// 부모 컴포넌트에서 자식 컴포넌트로 함수를 넘길 때, useCallback을 쓰는 것과 그냥 함수를 넘기는 것의 차이
// 리렌더링에 어떤 영향을 주는지 확인
const Compare = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // ❌ 매번 새로 만들어지는 함수 (렌더링마다 변경됨)
  const handleClickRaw = () => {
    console.log('❌ 일반 함수 호출');
  };

  // ✅ useCallback으로 메모이제이션된 함수
  const handleClickMemo = useCallback(() => {
    console.log('✅ useCallback 함수 호출');
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>useCallback 비교 실험</h2>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="입력 시 부모 리렌더링"
      />
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>부모 카운트 증가</button>

      <h3>자식에 일반 함수 전달</h3>
      <ChildRaw onClick={handleClickRaw} />

      <h3>자식에 useCallback 함수 전달</h3>
      <ChildMemo onClick={handleClickMemo} />
    </div>
  );
};

export default Compare;
