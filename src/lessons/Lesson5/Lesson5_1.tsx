import { useState } from 'react';
import Child from './Child';

export default function Lesson5_1() {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  console.log('Parent');

  return (
    <div className="ml-8 text-lg">
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => setParentCount((prev) => prev + 1)}
          className="bg-sky-400 text-white rounded py-0.5 px-2 transition-all duration-300 hover:bg-sky-600"
        >
          Parent Count
        </button>
        <button
          type="button"
          onClick={() => setChildCount((prev) => prev + 1)}
          className="bg-sky-400 text-white rounded py-0.5 px-2 transition-all duration-300 hover:bg-sky-600"
        >
          Child Count
        </button>
      </div>
      <ul>
        <li>Parent: {parentCount}</li>
        <li>
          <Child count={childCount} />
        </li>
      </ul>
    </div>
  );
}

