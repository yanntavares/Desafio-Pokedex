'use client'

import React, { useEffect, useState } from 'react';
import { Pokemon, getPokemons } from '@/app/api/api';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function Pokedex() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const pokemons_per_page = 18

    useEffect(() => {
        const fetchPokemons = async () => {
            setIsLoading(true);
            setPokemons([]);
            try {
                const data = await getPokemons(page, pokemons_per_page);
                setPokemons(data);
            } catch (error) {
                console.error('Error fetching pokemons:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPokemons();
    }, [page]);

    return (
        <div>
            <h2 className='justify-center text-center text-black font-120 p-8'>POKEDEX</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 items-center justify-center">
                {isLoading ? (
                    <h2>Loading Pokédex...</h2>
                ) : (
                    pokemons.map(pokemon => (
                        <Card
                            key={pokemon.id}
                            title={pokemon.name.toUpperCase()}
                            imageSource={pokemon.sprites.front_default}
                        />
                    ))
                )}
            </div>
            <div className="flex justify-center items-center gap-4 p-8">
                <Button label="Anterior" onClick={
                    () => setPage(p => Math.max(p - 1, 1))
                } variant='primary'></Button>

                <Button label="Próximo" onClick={
                    () => setPage(p => p + 1)
                } variant='primary'></Button>
            </div>
        </div>
    );
}