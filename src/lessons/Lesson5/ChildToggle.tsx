import { memo, useCallback, useState } from 'react';
import { Fragment } from 'react/jsx-runtime';

function ChildToggle() {
  const [on, setOn] = useState(false);

  console.log('ChildToggle');

  const toggle = useCallback(() => setOn((prev) => !prev), []);

  return (
    <Fragment>
      <p>Child: {on ? 'ON' : 'OFF'}</p>
      <button
        type="button"
        onClick={toggle}
        className="bg-sky-400 py-0.5 px-2 rounded text-white transition-all duration-300 hover:bg-sky-600"
      >
        Toggle
      </button>
    </Fragment>
  );
}

export default memo(ChildToggle);
