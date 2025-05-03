import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UseEffectBasic from '@exp/useEffect/Basic';
import Cleanup from '@exp/useEffect/Cleanup';
import EventListener from '@exp/useEffect/EventListener';
import DependencyMissing from '@exp/useEffect/DependencyMissing';
import AsyncEffect from '@exp/useEffect/AsyncEffect';

import Compare from '@exp/useCallback/Compare';

import ExpensiveCalc from '@exp/useMemo/ExpensiveCalc';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>홈입니다</div>} />
        <Route path="/labs/use-effect/basic" element={<UseEffectBasic />} />
        <Route path="/labs/use-effect/cleanup" element={<Cleanup />} />
        <Route path="/labs/use-effect/event-listener" element={<EventListener />} />
        <Route path="/labs/use-effect/dependency-missing" element={<DependencyMissing />} />
        <Route path="/labs/use-effect/async" element={<AsyncEffect />} />

        <Route path="/labs/use-callback/compare" element={<Compare />} />

        <Route path="/labs/use-memo/expensive" element={<ExpensiveCalc />} />
      </Routes>
    </Router>
  );
};

export default App;
