import { type ChangeEvent, useEffect, useState } from 'react';
import { fetchBio } from './fetchBio';

export default function Lesson2_2() {
  const [person, setPerson] = useState<string>('');

  useEffect(() => {
    const startFetching = async () => {
      const bio = await fetchBio(person);
      console.log(bio);
    };
    startFetching();
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

      <p className="text-black">{'Loading...'}</p>
    </div>
  );
}
