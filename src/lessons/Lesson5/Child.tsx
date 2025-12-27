type Props = {
  count: number;
};

export default function Child({ count }: Props) {
  console.log('Child');

  // 重い処理
  let i = 0;
  while (i < 10000000) i++;

  return <>Child: {count}</>;
}
