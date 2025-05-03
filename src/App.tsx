import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/shared/styles/GlobalStyle';
import { lightTheme, darkTheme } from '@/shared/styles/theme';
import { useLocalStorage } from '@/shared/hooks/useLocalStorage';

import TodoPage from '@/pages/TodoPage';
import TodoTestPage from '@/pages/TodoTestPage';

import UseEffectBasic from '@exp/useEffect/Basic';
import Cleanup from '@exp/useEffect/Cleanup';
import EventListener from '@exp/useEffect/EventListener';
import DependencyMissing from '@exp/useEffect/DependencyMissing';
import AsyncEffect from '@exp/useEffect/AsyncEffect';

import Compare from '@exp/useCallback/Compare';

import ExpensiveCalc from '@exp/useMemo/ExpensiveCalc';
import ParentWithMemo from '@exp/useMemo/ParentWithMemo';

import ListCompare from '@exp/virtualScroll/ListCompare';

import Layout from '@exp/reactRouter/Layout';
import Profile from '@exp/reactRouter/Profile';
import Settings from '@exp/reactRouter/Settings';
import UseEffectOnRouteChange from '@exp/reactRouter/UseEffectOnRouteChange';

import CounterContainer from '@pattern/containerPresenter/CounterContainer';
import CompoundExample from '@pattern/compoundComponent/CompoundExample';
import ControlledExample from '@pattern/compoundComponent/ControlledExample';
import StateReducerExample from '@pattern/compoundComponent/StateReducerExample';
import PropsGettersExample from '@pattern/compoundComponent/PropsGettersExample';
import CustomHookExample from '@pattern/customHookCompound/CustomHookExample';

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('darkMode', false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <button
        onClick={() => setDarkMode(prev => !prev)}
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          zIndex: 1000,
          padding: '6px 12px',
        }}
      >
        {darkMode ? '☀️ 라이트 모드' : '🌙 다크 모드'}
      </button>
      <Router>
        <Routes>
          <Route path="/" element={<div>홈입니다</div>} />

          <Route path="/todo" element={<TodoPage />} />

          <Route path="/labs/todo-test" element={<TodoTestPage />} />

          <Route path="/labs/use-effect/basic" element={<UseEffectBasic />} />
          <Route path="/labs/use-effect/cleanup" element={<Cleanup />} />
          <Route path="/labs/use-effect/event-listener" element={<EventListener />} />
          <Route path="/labs/use-effect/dependency-missing" element={<DependencyMissing />} />
          <Route path="/labs/use-effect/async" element={<AsyncEffect />} />

          <Route path="/labs/use-callback/compare" element={<Compare />} />

          <Route path="/labs/use-memo/expensive" element={<ExpensiveCalc />} />
          <Route path="/labs/use-memo/parent-memo" element={<ParentWithMemo />} />

          <Route path="/labs/virtual-scroll/list-compare" element={<ListCompare />} />

          <Route path="/labs/router" element={<Layout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="/labs/router/effect" element={<UseEffectOnRouteChange />} />

          <Route path="/labs/patterns/container-presenter" element={<CounterContainer />} />
          <Route path="/labs/patterns/compound-component" element={<CompoundExample />} />
          <Route path="/labs/patterns/control-props" element={<ControlledExample />} />
          <Route path="/labs/patterns/state-reducer" element={<StateReducerExample />} />
          <Route path="/labs/patterns/props-getters" element={<PropsGettersExample />} />
          <Route path="/labs/patterns/custom-hook-compound" element={<CustomHookExample />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
