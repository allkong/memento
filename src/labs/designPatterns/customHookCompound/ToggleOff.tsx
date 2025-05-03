import { ReactNode } from 'react';
import { useToggleContext } from './ToggleContext';

const ToggleOff = ({ children }: { children: ReactNode }) => {
  const { on } = useToggleContext();
  return !on ? <>{children}</> : null;
};

export default ToggleOff;
