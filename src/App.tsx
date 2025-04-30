import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseEffectBasic from '@exp/useEffect/Basic';
import Cleanup from '@exp/useEffect/Cleanup';
import EventListener from '@exp/useEffect/EventListener';
import DependencyMissing from '@exp/useEffect/DependencyMissing';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>홈입니다</div>} />
        <Route path="/labs/use-effect/basic" element={<UseEffectBasic />} />
        <Route path="/labs/use-effect/cleanup" element={<Cleanup />} />
        <Route path="/labs/use-effect/event-listener" element={<EventListener />} />
        <Route path="/labs/use-effect/dependency-missing" element={<DependencyMissing />} />
      </Routes>
    </Router>
  );
};

export default App;
