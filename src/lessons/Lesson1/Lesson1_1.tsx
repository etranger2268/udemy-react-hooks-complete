import { type ChangeEvent, useState } from 'react';

export default function Lesson1_1() {
  const [age, setAge] = useState<number>(0);
  const [value, setValue] = useState<string>('apple');

  console.log('rendering');

  const handleClick = () => {
    setAge((prev) => prev + 1);
    setAge((prev) => prev + 1);
    setAge((prev) => prev + 1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border mr-2 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
      />
      <button type="button" onClick={handleClick} className="border p-2 rounded-md bg-red-100">
        Add age
      </button>
      <p className="mt-2">You are {age}</p>
    </div>
  );
}
