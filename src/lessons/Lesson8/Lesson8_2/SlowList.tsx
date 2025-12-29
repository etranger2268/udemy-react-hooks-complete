import { memo } from 'react';

type Props = {
  text: string;
};

function SlowList({ text }: Props) {
  console.log('[ARTIFICIALLY SLOW] Rendering 200 <SlowItem />');

  const items = Array.from({ length: 200 }, (_, i) => i);

  return (
    <ul>
      {items.map((item) => (
        <SlowItem key={item} text={text} />
      ))}
    </ul>
  );
}

function SlowItem({ text }: Props) {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {}
  return <li>Text: {text}</li>;
}

export default memo(SlowList);
