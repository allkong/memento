import { ReactNode } from 'react';
import { useToggleContext } from './ToggleContext';

const ToggleOn = ({ children }: { children: ReactNode }) => {
  const { on } = useToggleContext();
  return on ? <>{children}</> : null;
};

export default ToggleOn;
