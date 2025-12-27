import { useRef } from 'react';

export default function Lesson3_3() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => console.log(inputRef.current?.value);

  return (
    <div>
      <input type="text" className="border-b" ref={inputRef} />
      <button type="button" onClick={handleClick}>
        input入力値を見る
      </button>
    </div>
  );
}
