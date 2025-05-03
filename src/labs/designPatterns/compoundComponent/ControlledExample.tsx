import { useState } from 'react';
import Toggle from './Toggle';

const ControlledExample = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h2>Control Props 패턴 실험</h2>
      <Toggle
        on={isOn} // 부모 상태 넘김
        onToggle={() => setIsOn(prev => !prev)} // 부모 상태 제어
      >
        <Toggle.On>🔆 켜짐 (부모 제어)</Toggle.On>
        <Toggle.Off>🌙 꺼짐 (부모 제어)</Toggle.Off>
        <Toggle.Button />
      </Toggle>
    </div>
  );
};

export default ControlledExample;
