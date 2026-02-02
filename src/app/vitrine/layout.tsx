export default function VitrineLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-stripped-pattern min-h-screen bg-fixed px-20">
      {children}
    </div>
  );
}
