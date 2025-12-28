import { useState } from 'react';
import ChildToggle from './ChildToggle';

export default function Lesson5_2() {
  const [count, setCount] = useState(0);
  const [on, setOn] = useState(false);

  console.log('Parent')

  return (
    <div className="ml-8">
      <div>
        <p>Parent: {count}</p>
        <button
          type="button"
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-sky-400 py-0.5 px-2 rounded text-white transition-all duration-300 hover:bg-sky-600"
        >
          Parent Count
        </button>
      </div>
      <ChildToggle toggle={() => setOn((prev) => !prev)} on={on} />
    </div>
  );
}
