import { type ChangeEvent, useEffect, useState } from 'react';
import { fetchBio } from './fetchBio';

export default function Lesson2_2() {
  const [person, setPerson] = useState<string>('');
  const [bio, setBio] = useState<string | null>(null);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    let ignore = false;
    const startFetching = async () => {
      const res = await fetchBio(person);
      if (!ignore) {
        setBio(res);
      }
    };
    startFetching();

    // setCount((prev) => prev + 1);

    return () => {
      ignore = true;
    };
  }, [person]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => setPerson(e.target.value);

  return (
    <div>
      <select onChange={handleChange} value={person} className="border py-0.5 px-2">
        <option value="">---</option>
        <option value="Sam">Sam</option>
        <option value="Bob">Bob</option>
        <option value="John">John</option>
      </select>

      <p className="text-black">{bio ?? 'Loading...'}</p>
      {/* <p>{count}</p> */}
    </div>
  );
}
