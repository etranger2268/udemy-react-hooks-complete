import { Suspense } from 'react';
import Router from './Router';

export default function Lesson7_3() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router />
    </Suspense>
  );
}
