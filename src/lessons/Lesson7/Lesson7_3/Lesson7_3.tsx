import { Suspense } from 'react';
import Router from './Router';

export default function Lesson7_3() {
  return (
    <div className="ml-8 text-lg">
      <section className="bg-slate-300 text-center py-0.5 px-4">Music Browser</section>
      <Suspense fallback={<p>Loading...</p>}>
        <Router />
      </Suspense>
    </div>
  );
}
