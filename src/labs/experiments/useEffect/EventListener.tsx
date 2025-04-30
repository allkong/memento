import { useEffect } from 'react';

const EventListener = () => {
  useEffect(() => {
    const handleClick = () => {
      console.log('🖱️ 화면 클릭됨!');
    };

    // 윈도우 클릭 이벤트를 addEventListener로 등록
    window.addEventListener('click', handleClick);
    console.log('✅ 이벤트 리스너 등록됨');

    return () => {
      console.log('❌ 이벤트 리스너 해제됨');
      // 클린업
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>useEffect addEventListener 실험</h2>
      <p>브라우저 아무 곳이나 클릭해보세요!</p>
    </div>
  );
};

export default EventListener;
