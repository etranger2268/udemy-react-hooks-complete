import type { MouseEvent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  id: string;
  isActive: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function TabButton({ children, id, isActive, onClick }: Props) {
  const bg = isActive ? 'bg-orange-100 hover:bg-orange-300' : 'bg-white hover:bg-gray-100';

  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      className={`py-0.5 border px-2 rounded transition-all duration-300 ${bg}`}
    >
      {children}
    </button>
  );
}
