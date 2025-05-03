import { useToggleContext } from './ToggleContext';

const ToggleButton = () => {
  const { toggle } = useToggleContext();
  return <button onClick={toggle}>토글 전환</button>;
};

export default ToggleButton;
