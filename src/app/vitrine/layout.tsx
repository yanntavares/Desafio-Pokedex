export default function VitrineLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="bg-stripped-pattern min-h-screen bg-fixed ">
        {children}
      </div>
    </div>
  );
}
