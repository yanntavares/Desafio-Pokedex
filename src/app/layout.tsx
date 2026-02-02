import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'PokePet',
    description: 'Vitrine de Pokemons',
    applicationName: 'Pokepet',
    authors: [{ url: 'https://seedabit.org.br', name: 'Seed a Bit' }],
    keywords: ['palavra-chave', 'palavra-chave'],
    creator: 'Yann Tavares',
    publisher: 'Yann Tavares',
    abstract: 'Vitrine de Pokemons',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='pt-BR'>
            <body className='px-20'>
                {children}
            </body>
        </html>
    )
}
