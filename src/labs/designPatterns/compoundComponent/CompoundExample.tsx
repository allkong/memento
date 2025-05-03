import Toggle from './Toggle';

// 부모 컴포넌트와 자식 컴포넌트들이 자연스럽게 함께 동작하도록 만든 패턴
// Select, Accordion, Tabs 등
const CompoundExample = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Compound Component 패턴 실험</h2>
      <Toggle>
        <Toggle.On>🔆 켜졌어요!</Toggle.On>
        <Toggle.Off>🌙 꺼졌어요.</Toggle.Off>
        <Toggle.Button />
      </Toggle>
    </div>
  );
};

export default CompoundExample;
