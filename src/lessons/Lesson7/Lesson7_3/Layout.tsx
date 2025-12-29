type Props = {
  isPending: boolean;
  children: React.ReactNode;
};

export default function Layout({ isPending, children }: Props) {
  return (
    <div className="ml-8 text-lg">
      <section className="bg-slate-300 text-center py-0.5 px-4">Music Browser</section>
      <main>{children}</main>
      {isPending && 'Loading...'}
    </div>
  );
}
