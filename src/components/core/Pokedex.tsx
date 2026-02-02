import React, { useEffect, useState } from 'react';
import { Pokemon, getPokemons } from '@/app/api/api';
import { Card } from '../ui/Card';

export function Pokedex() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPokemons = async () => {
            setIsLoading(true);
            try {
                const data = await getPokemons();
                setPokemons(data);
            } catch (error) {
                console.error('Error fetching pokemons:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPokemons();
    }, []);

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
            {isLoading ? (
                <h2>Loading Pokédex...</h2>
            ) : (
                pokemons.map(pokemon => (
                    <Card
                        key={pokemon.id}
                        title={pokemon.name}
                        imageSource={pokemon.sprites.front_default}
                    />
                ))
            )}
        </div>
    );
}