import { FixedSizeList as List } from 'react-window';
import { useState } from 'react';

const ITEM_COUNT = 1000;

const generateItems = () => {
  return Array.from({ length: ITEM_COUNT }, (_, i) => `항목 ${i + 1}`);
};

const items = generateItems();

const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
  console.log('렌더링된 항목:', index);
  return <div style={{ ...style, padding: 8, borderBottom: '1px solid #ddd' }}>{items[index]}</div>;
};

const ListCompare = () => {
  const [showNormalList, setShowNormalList] = useState(true);

  return (
    <div style={{ padding: 20 }}>
      <h2>Virtual Scroll 실험</h2>
      <button onClick={() => setShowNormalList(!showNormalList)}>
        {showNormalList ? 'Virtual Scroll 보기' : '일반 리스트 보기'}
      </button>

      <div style={{ marginTop: 20, height: 400, overflow: 'auto', border: '1px solid #ccc' }}>
        {showNormalList ? (
          <div>
            {items.map((_, index) => (
              <Row
                key={index}
                index={index}
                style={{ padding: 8, borderBottom: '1px solid #ddd' }}
              />
            ))}
          </div>
        ) : (
          <List height={400} itemCount={ITEM_COUNT} itemSize={35} width={'100%'}>
            {Row}
          </List>
        )}
      </div>
    </div>
  );
};

export default ListCompare;
