import { getPokemonDetails } from "@/app/api/api";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PokemonPageProps {
  params: Promise<{ name: string }>;
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const { name } = await params;

  try {
    const pokemon = await getPokemonDetails(name);

    return (
      <div className="bg-[#FAFAFA] min-h-screen border-8 border-[#B3A125] p-8 text-black rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        <div className="relative">
          <h1 className="text-center font-hollow text-3xl md:text-5xl lg:text-7xl text-[#B3A125] drop-shadow-lg">
            {pokemon.name.toUpperCase()}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1 items-center mt-4">
          <div className="relative flex flex-col items-center">
            <div className="absolute w-64 h-64 bg-[#B3A125]/10 rounded-full -z-10 animate-pulse" />
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              className="w-30 md:w-90 lg:w-90 drop-shadow-2xl hover:scale-110 transition-transform duration-300"
            />

            <div className="flex gap-6 mt-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-center border-r pr-6">
                <p className="text-xs text-gray-400 uppercase">Height</p>
                <p className="font-bold text-[#3B4CCA]">{pokemon.height / 10}m</p>
              </div>
              <div className="text-center border-r pr-6">
                <p className="text-xs text-gray-400 uppercase">Weight</p>
                <p className="font-bold text-[#3B4CCA]">
                  {pokemon.weight / 10}kg
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400 uppercase">Nº</p>
                <p className="font-bold text-[#3B4CCA]">#{pokemon.id}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 p-8 rounded-3xl border border-white shadow-xl space-y-6">
            <h2 className="text-xl font-pokemon text-[#B3A125] border-b-2 border-[#B3A125] pb-2 inline-block">
              QUIRKS & SKILLS
            </h2>

            <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-4">
              <div>
                <p className="font-bold text-xs uppercase tracking-tighter text-gray-500 mb-2">
                  Abilities
                </p>
                <div className="flex gap-2">
                  {pokemon.abilities.map((a, i) => (
                    <span
                      key={i}
                      className="bg-[#3B4CCA] text-white px-2 py-1 rounded-md text-xs font-bold"
                    >
                      {a.ability.name.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-bold text-xs uppercase text-gray-500 mb-2">
                  Base Stats
                </p>
                {pokemon.stats.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <span className="w-20 text-[10px] font-black uppercase text-gray-600">
                      {s.stat.name}
                    </span>
                    <div className="flex-1 h-3 bg-gray-200 rounded-sm overflow-hidden border border-gray-300">
                      <div
                        className="h-full bg-yellow-400"
                        style={{ width: `${(s.base_stat / 200) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold w-6">{s.base_stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <Link href="/vitrine">
            <Button label="Voltar" variant="primary" />
          </Link>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
  
}
