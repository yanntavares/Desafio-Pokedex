import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="lg:h-16 w-full bg-[#FAFAFA] flex items-center justify-between lg:px-20 sticky top-0 z-50">
        <div className="flex items-center justify-center gap-1">
          <img
            src="/icons/pokeball_logo.png"
            alt="Logo"
            className="h-12 w-auto block"
          />
          <div className="flex items-center leading-none lg:mt-[-10px]">
            <h1 className="lg:text-3xl font-pokemon text-[#3B4CCA]">Poke</h1>
            <h1 className="lg:text-3xl font-pokemon text-[#FF0000]">Pet</h1>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:text-xl text-black">
          <h2>Sobre nós</h2>
          <h2>Nossa Proposta</h2>
          <div className="outline outline-[#FFDE00] rounded-lg p-2">
            <h2>Vitrine</h2>
          </div>
        </div>
      </header>

      <div className="relative lg:h-[703px] w-full overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/banner.avif')",
          }}
        ></div>

        <div className="relative z-10 flex items-center h-full lg:px-28 lg:pt-24">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col lg:gap-20">
              <div className="flex flex-col lg:gap-16 lg:mt-[-210px]">
                <h2 className="font-hollow text-6xl text-black">
                  Seja Bem-Vindo
                </h2>
                <div className="flex justify-center items-center leading-none lg:mt-[-50px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                  <h1 className="lg:text-9xl font-pokemon text-[#3B4CCA] [-webkit-text-stroke:4px_#B3A125] [text-shadow:8px_8px_0px_#1D2C5E]">
                    Poke
                  </h1>
                  <h1 className="lg:text-9xl font-pokemon text-[#FF0000] [-webkit-text-stroke:4px_#B3A125] [text-shadow:8px_8px_0px_#7A0000] lg:ml-[-10px]">
                    Pet
                  </h1>
                </div>
              </div>
              <p className="text-black text-xl text-center">
                Sua Vitrine de Pokemons!
              </p>
            </div>
            <Link href="/vitrine" className='flex lg:w-128 lg:h-16'>
              <Button label="Ver Catálogo!" variant="CTA"></Button>
            </Link>
          </div>
        </div>
      </div>
      <div>Aqui vai ter mais coisa</div>
    </div>
  );
}
