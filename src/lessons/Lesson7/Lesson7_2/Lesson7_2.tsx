import { usePageNumber } from './hooks/usePageNumber';
import Issues from './Issues';

export default function Lesson7_2() {
  const { page, isPending, nextPage, prevPage } = usePageNumber();

  return (
    <div className="ml-8 text-lg">
      <div className="flex justify-center gap-4 items-center">
        <button
          type="button"
          onClick={prevPage}
          className="bg-sky-400 py-0.5 px-4 text-white rounded transition-all duration-300 hover:bg-sky-600"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextPage}
          className="bg-sky-400 py-0.5 px-4 text-white rounded transition-all duration-300 hover:bg-sky-600"
        >
          Next
        </button>
      </div>
      <div className="border-t mt-2" />
      {isPending && <p>Loading...</p>}
      <Issues page={page} />
    </div>
  );
}
