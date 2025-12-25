import { useEffect, useState } from 'react';

type Position = {
  x: number;
  y: number;
};

export default function Lesson2_1() {
  const initialPosition: Position = { x: 0, y: 0 };
  const [position, setPosition] = useState(initialPosition);

  const handleMove = (e: PointerEvent) => setPosition({ x: e.clientX, y: e.clientY });

  // biome-ignore lint: "handleMove is not included in the dependency"
  useEffect(() => {
    window.addEventListener('pointermove', handleMove);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'blue',
        borderRadius: '50%',
        opacity: 0.6,
        pointerEvents: 'none',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -20,
        top: -20,
        width: 50,
        height: 50,
      }}
    />
  );
}
