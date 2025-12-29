import { Suspense, useDeferredValue, useState } from 'react';
import SearchResult from './SearchResult';

export default function Lesson8_1() {
  const [query, setQuery] = useState<string>('');
  const deferredQuery = useDeferredValue(query);
  return (
    <div className="text-lg">
      <label htmlFor="search" className="block">
        アルバム検索
      </label>
      <input
        type="text"
        placeholder="album's title"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        className={`border py-0.5 px-2 rounded outline-none focus:ring focus:ring-blue-600 ${query !== deferredQuery ? 'opacity-20' : 'opacity-100'}`}
      />
      <Suspense fallback={<p className="text-green-600">Loading...</p>}>
        <SearchResult query={deferredQuery} />
      </Suspense>
    </div>
  );
}
