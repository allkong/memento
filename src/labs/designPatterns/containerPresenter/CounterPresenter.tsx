type Props = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

// UI 렌더링 (프리젠터)
const CounterPresenter = ({ count, onIncrement, onDecrement }: Props) => {
  return (
    <div style={{ padding: 20 }}>
      <h2>카운터</h2>
      <p>현재 값: {count}</p>
      <button onClick={onDecrement}>- 감소</button>
      <button onClick={onIncrement}>+ 증가</button>
    </div>
  );
};

export default CounterPresenter;
