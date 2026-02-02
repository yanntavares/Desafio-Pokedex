export interface Pokemon {
    id: number;
    name: string;
    description: string;
    sprites: {
        front_default: string;
    }
}

export interface GetPokemonDTO {
    results: { name: string; url: string }[];
}

export interface CreatePokemonDTO {
    name: string;
    description: string;
    imageUrl: string;
}

export async function getPokemons(): Promise<Pokemon[]> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data: GetPokemonDTO = await response.json();
    const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon: { url: string }) => {
            const res = await fetch(pokemon.url);
            return res.json();
        })
    );
    return pokemonDetails;
}