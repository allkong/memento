import { useEffect, useState } from 'react';

const AsyncEffect = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // useEffect 안에 async 함수 직접 사용 금지 (useEffect(async() => { ... }) 금지)
    // -> async 함수 안에서 비동기 처리
    const fetchData = async () => {
      console.log('📡 데이터 요청 시작');
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const json = await res.json();
      console.log('✅ 데이터 도착');
      setData(json.title);
    };

    fetchData();

    return () => {
      console.log('💨 cleanup - fetch는 직접 취소하지 않음');
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>useEffect async 실험</h2>
      <p>결과: {data ?? '로딩 중...'}</p>
    </div>
  );
};

export default AsyncEffect;
