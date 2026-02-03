import type { Metadata } from 'next'
import './globals.css'
import { Merriweather } from 'next/font/google';

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

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='pt-BR'>
            <body className={`${merriweather.variable}`}>
                {children}
            </body>
        </html>
    )
}
