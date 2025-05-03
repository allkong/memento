import { createContext, useContext } from 'react';

type ToggleContextType = {
  on: boolean;
  toggle: () => void;
} | null;

export const ToggleContext = createContext<ToggleContextType>(null);

export const useToggleContext = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('Toggle 관련 컴포넌트는 ToggleProvider 안에서 사용해야 합니다.');
  }
  return context;
};
