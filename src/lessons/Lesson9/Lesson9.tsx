import { formAction } from './actions/actions';

export default function Lesson9() {
  return (
    <div className="text-lg">
      <form action={formAction}>
        <button
          type="submit"
          className="bg-sky-400 text-white py-0.5 px-4 rounded transition-all duration-300 hover:bg-sky-600"
        >
          Increment
        </button>
      </form>
    </div>
  );
}
