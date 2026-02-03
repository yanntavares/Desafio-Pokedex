import { getPokemonDetails } from '@/app/api/api';

interface PokemonPageProps {
    params: Promise<{ name: string }>;
}

export default async function PokemonPage ({params}: PokemonPageProps) {
    const { name } = await params;
    const pokemon = await getPokemonDetails(name);

    return (
        <div>
            <h1>{pokemon.name.toUpperCase()}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>ID: {pokemon.id}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    )

}