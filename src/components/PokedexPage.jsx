import { useState } from "react";
import PokemonDetailCard from "./PokemonDetailCard.jsx";
import PokemonListRight from "./PokemonListSidebar.jsx";


export default function PokedexPage() {
    const [selected, setSelected] = useState(null);
    return (
        <div className="min-h-screen overflow-hidden relative">

            {/* Fond sombre style Game Boy */}
            <div className="absolute inset-0 z-0 bg-[#1a1a2e]" />

            {/* Grille de points décoratifs */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #9bbc0f 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Layout principal */}
            <div className="relative z-10 flex flex-col lg:flex-row gap-6 p-4 lg:p-8 min-h-screen">

                {/* Carte détail — 65% sur desktop */}
                <div className="w-full lg:w-[65%]">
                    <PokemonDetailCard pokemon={selected} />
                </div>

                {/* Sidebar liste — 35% sur desktop */}
                <div className="w-full lg:w-[35%]">
                    <PokemonListRight onSelect={setSelected} />
                </div>


            </div>
        </div>
    );
}