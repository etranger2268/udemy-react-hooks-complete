import { memo } from 'react';

type Props = {
  count: number;
};

function Child({ count }: Props) {
  console.log('Child');

  // 重い処理
  let i = 0;
  while (i < 10000000) i++;

  return <>Child: {count}</>;
}

export default memo(Child);
