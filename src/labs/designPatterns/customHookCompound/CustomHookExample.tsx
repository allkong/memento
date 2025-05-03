import ToggleProvider from './ToggleProvider';
import ToggleOn from './ToggleOn';
import ToggleOff from './ToggleOff';
import ToggleButton from './ToggleButton';

const CustomHookExample = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Custom Hook + Compound Component 패턴 실험</h2>
      <ToggleProvider>
        <ToggleOn>🔆 켜짐</ToggleOn>
        <ToggleOff>🌙 꺼짐</ToggleOff>
        <ToggleButton />
      </ToggleProvider>
    </div>
  );
};

export default CustomHookExample;
