import { useEffect } from 'react';

export default function Lesson2_1() {
  useEffect(() => {}, []);

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'blue',
        borderRadius: '50%',
        opacity: 0.6,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 50,
        height: 50,
      }}
    />
  );
}
