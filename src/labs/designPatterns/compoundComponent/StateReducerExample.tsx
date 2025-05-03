import { useState } from 'react';
import Toggle from './Toggle';

const StateReducerExample = () => {
  const [clicks, setClicks] = useState(0);

  const customStateReducer = (state: boolean, changes: { type: string }) => {
    if (clicks < 2) {
      setClicks(prev => prev + 1);
      return false; // 3번 누르기 전까지 상태 유지
    }
    return !state;
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>State Reducer 패턴 실험</h2>
      <p>버튼 클릭 횟수: {clicks}</p>
      <Toggle stateReducer={customStateReducer}>
        <Toggle.On>🔆 켜짐 (3번 클릭 이후)</Toggle.On>
        <Toggle.Off>🌙 꺼짐 (초기 상태)</Toggle.Off>
        <Toggle.Button />
      </Toggle>
    </div>
  );
};

export default StateReducerExample;
