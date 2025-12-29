import { fetchData } from './data';

type Props = {
  query: string;
};

export default function SearchResult({ query }: Props) {
  if (query === '') {
    return null;
  }

  const albums = use(fetchData(`/search?q=${query}`)) as {
    id: number;
    title: string;
    year: number;
  }[];

  if (albums.length === 0) {
    return (
      <p>
        No Matches fon <i>"{query}"</i>
      </p>
    );
  }

  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}

function use(promise: any) {
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      (result: any) => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      (reason: any) => {
        promise.status = 'rejected';
        promise.reason = reason;
      },
    );
    throw promise;
  }
}
