import { createContext, useContext, useState, ReactNode } from 'react';

type ToggleContextType = {
  on: boolean; // 불 켜짐/꺼짐 상태
  toggle: () => void; // 상태를 바꾸는 함수
  getToggleProps: (
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>,
  ) => React.ButtonHTMLAttributes<HTMLButtonElement>;
};
// context 공간을 만듦
export const ToggleContext = createContext<ToggleContextType | null>(null);

type ToggleProps = {
  children: ReactNode;
  on?: boolean; // 외부 상태 (control props)
  onToggle?: () => void; // 외부 toggle 핸들러
  stateReducer?: (state: boolean, changes: { type: string }) => boolean; // 상태 변경을 커스터마이징하는 함수
};

// 부모 컴포넌트
// 상태를 만들고 자식 컴포넌트에게 context로 전달
const Toggle = ({ children, on: controlledOn, onToggle, stateReducer }: ToggleProps) => {
  const [uncontrolledOn, setUncontrolledOn] = useState(false);

  const isControlled = controlledOn !== undefined; // 컨트롤 방식 결정
  const currentOn = isControlled ? controlledOn : uncontrolledOn;

  const toggle = () => {
    let newState = !currentOn;
    if (stateReducer) {
      newState = stateReducer(currentOn, { type: 'toggle' });
    }

    if (!isControlled) {
      setUncontrolledOn(newState);
    }

    onToggle?.();
  };

  const getToggleProps = (props: React.ButtonHTMLAttributes<HTMLButtonElement> = {}) => ({
    ...props,
    'aria-pressed': currentOn,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      props.onClick?.(e);
      toggle();
    },
  });

  // 자식 컴포넌트들이 context 데이터에 접근 가능하도록 함
  return (
    <ToggleContext.Provider value={{ on: currentOn, toggle, getToggleProps }}>
      {children}
    </ToggleContext.Provider>
  );
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
