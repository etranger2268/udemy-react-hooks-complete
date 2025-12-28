import { useCallback, useMemo, useState } from 'react';

export default function Lesson5_3() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const double = useCallback((count: number) => {
    // 重い処理
    let i = 0;
    while (i < 1000000) i++;
    return count * 2;
  }, []);

  const doubleCount = useMemo(() => double(count2), [count2, double]);

  return (
    <div className="ml-8 flex gap-4 text-lg">
      <div className="">
        <p>Counter: {count1}</p>
        <button
          type="button"
          onClick={() => setCount1((prev) => prev + 1)}
          className="bg-sky-400 py-0.5 px-2 rounded text-white transition-all duration-300 hover:bg-sky-600"
        >
          Increment count1
        </button>
      </div>
      <div>
        <p>
          Counter: {count2}, {doubleCount}
        </p>
        <button
          type="button"
          onClick={() => setCount2((prev) => prev + 1)}
          className="bg-sky-400 py-0.5 px-2 rounded text-white transition-all duration-300 hover:bg-sky-600"
        >
          Increment count2
        </button>
      </div>
    </div>
  );
}
