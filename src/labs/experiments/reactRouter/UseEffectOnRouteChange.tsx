import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 라우트(pathname) 변화를 감지해서 useEffect 실행
const UseEffectOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('📍 현재 경로:', location.pathname);

    return () => {
      console.log('🧹 이전 경로 정리:', location.pathname);
    };
  }, [location.pathname]);

  return (
    <div style={{ padding: 20 }}>
      <h2>라우트 변경 감지 useEffect 실험</h2>
      <p>현재 경로: {location.pathname}</p>
    </div>
  );
};

export default UseEffectOnRouteChange;
