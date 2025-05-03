import { ReactNode } from 'react';
import { useToggle } from './useToggle';
import { ToggleContext } from './ToggleContext';

type Props = {
  children: ReactNode;
};

const ToggleProvider = ({ children }: Props) => {
  const { on, toggle } = useToggle();

  return <ToggleContext.Provider value={{ on, toggle }}>{children}</ToggleContext.Provider>;
};

export default ToggleProvider;
