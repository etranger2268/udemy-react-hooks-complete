import { useState } from 'react';

export default function Lesson1_1() {
  const [age, setAge] = useState<number>(0);

  const handleClick = () => {
    setAge((prev) => prev + 1);
    setAge((prev) => prev + 1);
    setAge((prev) => prev + 1);
    // setAge(age + 1);
    // setAge(age + 1);
    // setAge(age + 1);
  };

  return (
    <div>
      <input type="text" />
      <button type="button" onClick={handleClick} className="border p-2 rounded-md bg-red-100">
        Add age
      </button>
      <p>You are {age}</p>
    </div>
  );
}
