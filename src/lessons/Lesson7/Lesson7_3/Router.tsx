import { useState } from 'react';
import ArtistPage from './ArtistPage';
import IndexPage from './IndexPage';

export default function Router() {
  const [page, setPage] = useState('/');

  const navigate = (url: string) => setPage(url);

  const content =
    page === '/' ? (
      <IndexPage navigate={navigate} />
    ) : page === '/the-beatles' ? (
      <ArtistPage artist={{ id: 'the-beatles', name: 'The Beatles' }} />
    ) : undefined;

  return <main>{content}</main>;
}
