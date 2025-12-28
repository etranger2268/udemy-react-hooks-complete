import { useCallback, useMemo, useReducer, useTransition } from 'react';

const NEXT = 'NEXT';
const PREV = 'PREV';

type State = {
  page: number;
};

type Action = { type: typeof NEXT } | { type: typeof PREV };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case NEXT: {
      return { page: state.page + 1 };
    }
    case PREV: {
      return { page: Math.max(state.page - 1, 1) };
    }
    default: {
      return state;
    }
  }
}

export const usePageNumber = () => {
  const [state, dispatch] = useReducer(reducer, { page: 1 });
  const [isPending, startTransition] = useTransition();
  const nextPage = useCallback(() => startTransition(() => dispatch({ type: NEXT })), []);
  const prevPage = useCallback(() => startTransition(() => dispatch({ type: PREV })), []);
  return useMemo(
    () => ({ page: state.page, isPending, nextPage, prevPage }),
    [state, isPending, nextPage, prevPage],
  );
};
