import { Suspense, use } from 'react';
import { Fragment } from 'react/jsx-runtime';

const simulateDelay = async <T,>(data: T): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data;
};

const posts = Array.from({ length: 100 }, (_, i) => String(i + 1).padStart(3, '0'));
const postsPromise = simulateDelay(posts);

export default function PostsTab() {
  return (
    <div>
      <h1>Posts Page</h1>
      <ul className="list-disc ml-6">
        <Suspense fallback={<p className="text-green-600">Loading...</p>}>
          <PostsTabContent postsPromise={postsPromise} />
        </Suspense>
      </ul>
    </div>
  );
}

type PostsTabContentProps = {
  postsPromise: Promise<string[]>;
};

function PostsTabContent({ postsPromise }: PostsTabContentProps) {
  const posts = use(postsPromise);

  return (
    <Fragment>
      {posts.map((post) => (
        <li key={post}>Post #{post}</li>
      ))}
    </Fragment>
  );
}
