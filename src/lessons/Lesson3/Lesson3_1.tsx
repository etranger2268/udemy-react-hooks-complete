import { useRef, useState } from 'react';

export default function Lesson3_1() {
  const [input, setInput] = useState<string>('');
  const ref = useRef(0);
  console.log(ref.current);

  const handleClick = () => {
    ref.current += 1;
  };

  return (
    <div className="ml-8 flex items-center gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded py-0.5 px-2 "
      />
      <button
        type="button"
        onClick={handleClick}
        className="bg-sky-400 text-white py-0.5 px-2 rounded hover:bg-sky-500 transition-all duration-300"
      >
        Click me!
      </button>
      <p></p>
    </div>
  );
}
