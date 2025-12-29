import { useState, useTransition } from 'react';
import ArtistPage from './ArtistPage';
import IndexPage from './IndexPage';
import Layout from './Layout';

export default function Router() {
  const [page, setPage] = useState('/');
  const [isPending, startTransition] = useTransition();

  const navigate = (url: string) => startTransition(() => setPage(url));

  const content =
    page === '/' ? (
      <IndexPage navigate={navigate} />
    ) : page === '/the-beatles' ? (
      <ArtistPage artist={{ id: 'the-beatles', name: 'The Beatles' }} />
    ) : undefined;

  return <Layout isPending={isPending}>{content}</Layout>;
}
