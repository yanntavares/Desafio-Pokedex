export default function PokemonDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-stripped-pattern min-h-screen bg-fixed px-20 text-black">
      {children}
    </div>
  );
}