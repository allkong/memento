import { createContext, useContext, useState, ReactNode } from 'react';

// context 공간을 만듦
const ToggleContext = createContext<{
  on: boolean; // 불 켜짐/꺼짐 상태
  toggle: () => void; // 상태를 바꾸는 함수
} | null>(null);

// 부모 컴포넌트
// 상태를 만들고 자식 컴포넌트에게 context로 전달
const Toggle = ({ children }: { children: ReactNode }) => {
  const [on, setOn] = useState(false); // 상태 생성
  const toggle = () => setOn(o => !o); // 상태 변경 함수

  // 자식 컴포넌트들이 context 데이터에 접근 가능하도록 함
  return <ToggleContext.Provider value={{ on, toggle }}>{children}</ToggleContext.Provider>;
};

// 자식 컴포넌트: On
const ToggleOn = ({ children }: { children: ReactNode }) => {
  const context = useContext(ToggleContext); // context 가져옴
  if (!context) throw new Error('Toggle.On must be used within <Toggle>');

  return context.on ? <>{children}</> : null;
};

Toggle.On = ToggleOn;

// 자식 컴포넌트: Off
const ToggleOff = ({ children }: { children: ReactNode }) => {
  const context = useContext(ToggleContext);
  if (!context) throw new Error('Toggle.Off must be used within <Toggle>');

  return !context.on ? <>{children}</> : null;
};

Toggle.Off = ToggleOff;

// 자식 컴포넌트: Button
const ToggleButton = () => {
  const context = useContext(ToggleContext);
  if (!context) throw new Error('Toggle.Button must be used within <Toggle>');

  return <button onClick={context.toggle}>토글 전환</button>;
};

Toggle.Button = ToggleButton;

export default Toggle;
