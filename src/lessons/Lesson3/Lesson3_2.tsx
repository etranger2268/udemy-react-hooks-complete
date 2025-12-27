import { useRef } from 'react';

export default function Lesson3_2() {
  const listRef = useRef<HTMLUListElement>(null);

  const scrollToIndex = (index: number) => {
    const listNode = listRef.current;
    const imgNode = listNode?.querySelectorAll('li > img')[index];

    imgNode?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <div className="ml-8">
      <nav className="flex gap-4 items-center">
        <button
          type="button"
          className="bg-blue-400 text-white rounded py-0.5 px-2 transition-all duration-300 hover:bg-blue-600"
          onClick={() => scrollToIndex(0)}
        >
          Cat1
        </button>
        <button
          type="button"
          className="bg-blue-400 text-white rounded py-0.5 px-2 transition-all duration-300 hover:bg-blue-600"
          onClick={() => scrollToIndex(1)}
        >
          Cat2
        </button>
        <button
          type="button"
          className="bg-blue-400 text-white rounded py-0.5 px-2 transition-all duration-300 hover:bg-blue-600"
          onClick={() => scrollToIndex(2)}
        >
          Cat3
        </button>
      </nav>
      <div style={{ overflowX: 'auto', maxWidth: '700px', margin: 'auto' }}>
        <ul
          className="flex items-center justify-between"
          style={{ minWidth: '1300px' }}
          ref={listRef}
        >
          <li>
            <img
              src="https://api.thecatapi.com/v1/images/search?size=small"
              alt="Cat 1"
              width="200"
              height="200"
            />
          </li>
          <li>
            <img
              src="https://api.thecatapi.com/v1/images/search?size=med"
              alt="Cat 2"
              width="300"
              height="200"
            />
          </li>
          <li>
            <img
              src="https://api.thecatapi.com/v1/images/search?size=small"
              alt="Cat 3"
              width="250"
              height="200"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
