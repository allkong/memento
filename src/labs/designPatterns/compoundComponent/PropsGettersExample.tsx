import { useContext } from 'react';
import Toggle from './Toggle';
import { ToggleContext } from './Toggle';

const PropsGettersExample = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Props Getters 패턴 실험</h2>
      <Toggle>
        <Toggle.On>🔆 켜짐</Toggle.On>
        <Toggle.Off>🌙 꺼짐</Toggle.Off>
        <CustomToggleButton>커스텀 토글 버튼</CustomToggleButton>
      </Toggle>
    </div>
  );
};

const CustomToggleButton = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(ToggleContext);
  if (!context) throw new Error('CustomToggleButton은 Toggle 안에서만 사용해야 함');

  // 컴포넌트 사용자에게 필요한 props를 미리 모아서 넘겨주는 함수
  return <button {...context.getToggleProps()}>{children}</button>;
};

export default PropsGettersExample;
