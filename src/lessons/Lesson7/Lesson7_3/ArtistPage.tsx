import { Suspense } from 'react';
import Albums from './Albums';
import Biography from './Biography';

type Props = {
  artist: {
    id: string;
    name: string;
  };
};

export default function ArtistPage({ artist }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-block">{artist.name}</h1>
      <Biography artistId={artist.id} />
      <Suspense fallback={<AlbumsGlimmer />}>
        <Albums artistId={artist.id} />
      </Suspense>
    </div>
  );
}

function AlbumsGlimmer() {
  return (
    <div className="flex justify-center items-center">
      <p>Loading...</p>
    </div>
  );
}
