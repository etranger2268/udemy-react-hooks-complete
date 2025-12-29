import { useActionState } from 'react';
import { action } from './actions/actions';

export type State = {
  count: number;
};

export default function Lesson9() {
  const initialState: State = { count: 0 };
  const [state, formAction, isPending] = useActionState(action, initialState);
  return (
    <div className="text-lg">
      <form action={formAction}>
        <button
          value={`Current Button Count: ${state.count}`}
          name="button"
          type="submit"
          disabled={isPending}
          className={`text-white py-0.5 px-4 rounded transition-all duration-300 ${isPending ? 'bg-gray-400' : 'bg-sky-400 hover:bg-sky-600'}`}
        >
          {isPending ? 'Updating...' : 'Increment'}
        </button>
      </form>

      {state && <p>Count: {state.count}</p>}
    </div>
  );
}
