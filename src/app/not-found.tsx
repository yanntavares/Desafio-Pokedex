"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-white px-6">
      <div
        className="absolute inset-0 opacity-10 bg-repeat z-0"
        style={{
          backgroundImage: "url('/images/whitepokemonbackground.jpg')",
        }}
      ></div>
      <div className="z-10 flex items-center justify-center gap-12 max-w-5xl px-">
        <div>
          <img
            src="/images/pokeball.png"
            alt="Pokeball"
            className="h-25 w-auto md:h-25 lg:h-32 animate-bounce"
          />
        </div>
        <div className="max-w-win">
          <h1 className=" text-[#FF0000] text-3xl md:text-5xl lg:text-7xl font-pokemon mb-8 text-center">
            Error 404
          </h1>
          <p className="text-black mb-8 text-xs md:text-sm lg:text-base">
            Parece que a página que você tentou acessar não existe, o Pokemon
            foi longe demais!
          </p>
          <Link href="/vitrine" className="flex items-center justify-center">
            <Button label="Voltar ao início" variant="primary"></Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
