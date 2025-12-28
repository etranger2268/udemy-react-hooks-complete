import { type MouseEvent, type ReactNode, useTransition } from 'react';

type Props = {
  children: ReactNode;
  id: string;
  isActive: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function TabButton({ children, id, isActive, onClick }: Props) {
  const [isPending, startTransition] = useTransition();

  const bg = isActive ? 'bg-orange-100 hover:bg-orange-300' : 'bg-white hover:bg-gray-100';

  if (isPending) {
    return <p className="border py-0.5 px-2 rounded text-green-600">Loading...</p>;
  }

  return (
    <button
      id={id}
      type="button"
      onClick={(e) => startTransition(() => onClick(e))}
      className={`py-0.5 border px-2 rounded transition-all duration-300 ${bg}`}
    >
      {children}
    </button>
  );
}
