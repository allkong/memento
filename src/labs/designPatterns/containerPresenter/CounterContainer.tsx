import { useState } from 'react';
import CounterPresenter from './CounterPresenter';

// 상태 관리 (컨테이너)
const CounterContainer = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(c => c + 1);
  const handleDecrement = () => setCount(c => c - 1);

  return (
    <CounterPresenter count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
  );
};

export default CounterContainer;
