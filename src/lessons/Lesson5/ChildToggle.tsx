import { Fragment } from "react/jsx-runtime";

type Props = {
  toggle: () => void;
  on: boolean;
};

export default function ChildToggle({ toggle, on }: Props) {
  console.log('ChildToggle')
  
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
