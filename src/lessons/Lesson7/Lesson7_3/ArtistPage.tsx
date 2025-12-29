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
      <Albums artistId={artist.id} />
    </div>
  );
}

function AlbumsGlimmer() {
  return (
    <div className="flex h-screen justify-center items-center">
      <p>Loading...</p>
    </div>
  );
}
