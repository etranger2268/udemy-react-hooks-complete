import { useDeferredValue, useState } from 'react';
import SlowList from './SlowList';

export default function Lesson8_2() {
  const [text, setText] = useState<string>('');
  const deferredText = useDeferredValue(text);

  console.log(`text: ${text}`);
  console.log(`deferredText: ${deferredText}`);

  return (
    <div className="text-lg">
      <label htmlFor="text" className="block font-medium">
        Text
      </label>
      <input
        id="text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border py-0.5 px-2 rounded outline-none focus:ring focus:ring-blue-600"
      />
      <SlowList text={deferredText} />
    </div>
  );
}
