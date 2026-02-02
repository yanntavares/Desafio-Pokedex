export default function VitrineLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='pt-BR'>
            <div className="bg-stripped-pattern min-h-screen bg-fixed px-20">
                {children}
            </div>
        </html>
    )
}