type Props = {
  navigate: (url: string) => void;
};

export default function IndexPage({ navigate }: Props) {
  return (
    <button
      type="button"
      onClick={() => navigate('/the-beatles')}
      className="bg-orange-100 py-0.5 px-4 transition-all duration-300 hover:bg-orange-300"
    >
      Open The Beatles artist page
    </button>
  );
}
