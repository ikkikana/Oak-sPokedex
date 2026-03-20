import { useState } from "react";

const TYPE_COLORS = {
    FIRE:    "bg-orange-500 text-orange-950 border-orange-700",
    WATER:   "bg-blue-400 text-blue-950 border-blue-600",
    GRASS:   "bg-green-500 text-green-950 border-green-700",
    PSYCHIC: "bg-pink-400 text-pink-950 border-pink-600",
    ELECTRIC:"bg-yellow-400 text-yellow-900 border-yellow-600",
    NORMAL:  "bg-[#9bbc0f] text-[#0f380f] border-[#306230]",
    DARK:    "bg-gray-700 text-gray-100 border-gray-900",
    DRAGON:  "bg-indigo-600 text-indigo-100 border-indigo-800",
};

const STAT_LABELS = ["HP", "ATK", "DEF", "SP.A", "SP.D", "SPD"];

export default function PokemonDetailCard({ pokemon }) {
    /* pokemon = objet sélectionné passé depuis le parent.
       Si rien n'est sélectionné, on affiche un écran d'accueil. */

    if (!pokemon) {
        return (
            <div className="bg-[#CC0000] border-4 border-[#990000] rounded-2xl p-4 lg:p-6 min-h-[420px] lg:min-h-[580px] flex flex-col">
                {/* LED + déco */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#00ff88] border border-[#00aa55] animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400 border border-yellow-600" />
                    <div className="w-2 h-2 rounded-full bg-blue-400 border border-blue-600" />
                </div>

                {/* Écran vide */}
                <div className="bg-[#333] rounded-lg p-2 border-4 border-[#222] flex-1 flex items-center justify-center">
                    <div className="bg-[#0f380f] rounded w-full h-full flex items-center justify-center p-6">
                        <p className="font-pixel text-[#9bbc0f] text-xs text-center leading-loose">
                            CHOISIR UN<br />POKEMON...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const maxStat = 255;
    const stats = [
        pokemon.stats?.hp    ?? 50,
        pokemon.stats?.atk   ?? 50,
        pokemon.stats?.def   ?? 50,
        pokemon.stats?.spa   ?? 50,
        pokemon.stats?.spd   ?? 50,
        pokemon.stats?.speed ?? 50,
    ];

    const types = Array.isArray(pokemon.type)
        ? pokemon.type
        : [pokemon.type];

    return (
        <div className="bg-[#CC0000] border-4 border-[#990000] rounded-2xl p-4 lg:p-6 min-h-[420px] lg:min-h-[580px] flex flex-col gap-4">

            {/* Barre supérieure : LEDs + numéro */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#00ff88] border border-[#00aa55] animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400 border border-yellow-600" />
                    <div className="w-2 h-2 rounded-full bg-blue-400 border border-blue-600" />
                </div>
                <span className="font-pixel text-[#FFD700] text-xs">
          #{String(pokemon.id).padStart(3, "0")}
        </span>
            </div>

            {/* Écran principal */}
            <div className="bg-[#333] rounded-lg p-2 border-4 border-[#222]">
                <div className="bg-[#0f380f] rounded p-3 flex flex-col gap-3">

                    {/* Header écran */}
                    <div className="flex items-center justify-between border-b-2 border-[#306230] pb-2">
            <span className="font-pixel text-[#9bbc0f] text-[10px]">
              {pokemon.name.toUpperCase()}
            </span>
                        <div className="flex gap-1">
                            {types.map((t) => (
                                <span
                                    key={t}
                                    className={`font-pixel text-[7px] px-1.5 py-0.5 rounded border ${TYPE_COLORS[t.toUpperCase()] ?? TYPE_COLORS.NORMAL}`}
                                >
                  {t.toUpperCase()}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Image + stats */}
                    <div className="flex flex-col sm:flex-row gap-3">

                        {/* Image */}
                        <div className="w-full sm:w-[140px] h-[140px] bg-[#306230] rounded border-2 border-[#9bbc0f] flex items-center justify-center flex-shrink-0">
                            <img
                                src={pokemon.image}
                                alt={pokemon.name}
                                className="h-[120px] w-[120px] object-contain"
                                style={{ imageRendering: "pixelated" }}
                            />
                        </div>

                        {/* Barres de stats */}
                        <div className="flex flex-col gap-2 flex-1 justify-center">
                            {STAT_LABELS.map((label, i) => (
                                <div key={label} className="flex items-center gap-2">
                  <span className="font-pixel text-[7px] text-[#9bbc0f] w-8 flex-shrink-0">
                    {label}
                  </span>
                                    <div className="flex-1 h-2 bg-[#306230] rounded-sm overflow-hidden">
                                        <div
                                            className="h-full bg-[#9bbc0f] rounded-sm transition-all duration-700"
                                            style={{ width: `${Math.round((stats[i] / maxStat) * 100)}%` }}
                                        />
                                    </div>
                                    <span className="font-pixel text-[7px] text-[#9bbc0f] w-6 text-right">
                    {stats[i]}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="font-pixel text-[7px] text-[#9bbc0f] leading-loose opacity-80 border-t-2 border-[#306230] pt-2">
                        {pokemon.description ?? "Aucune description disponible."}
                    </p>

                </div>
            </div>

            {/* Infos poids / taille */}
            <div className="flex gap-3">
                <div className="flex-1 bg-[#990000] rounded-lg border-2 border-[#770000] p-2 text-center">
                    <p className="font-pixel text-[7px] text-[#ffaaaa]">POIDS</p>
                    <p className="font-pixel text-[10px] text-[#FFD700] mt-1">
                        {pokemon.weight ?? "???"} kg
                    </p>
                </div>
                <div className="flex-1 bg-[#990000] rounded-lg border-2 border-[#770000] p-2 text-center">
                    <p className="font-pixel text-[7px] text-[#ffaaaa]">TAILLE</p>
                    <p className="font-pixel text-[10px] text-[#FFD700] mt-1">
                        {pokemon.height ?? "???"} m
                    </p>
                </div>
                <div className="flex-1 bg-[#990000] rounded-lg border-2 border-[#770000] p-2 text-center">
                    <p className="font-pixel text-[7px] text-[#ffaaaa]">LV. RECH</p>
                    <p className="font-pixel text-[10px] text-[#FFD700] mt-1">
                        {pokemon.researchLevel ?? "10"}
                    </p>
                </div>
            </div>

            {/* Boutons D-pad décoratifs */}
            <div className="flex justify-between items-center mt-auto">
                <div className="relative w-12 h-12">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-1/3 bg-[#222] rounded-sm" />
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1/3 bg-[#222] rounded-sm" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-[#333] rounded-full z-10" />
                </div>
                <div className="flex gap-2 items-center">
                    <span className="font-pixel text-[7px] text-[#ffaaaa]">B</span>
                    <div className="w-7 h-7 rounded-full bg-[#880000] border-2 border-[#660000]" />
                    <div className="w-7 h-7 rounded-full bg-[#CC0044] border-2 border-[#880022]" />
                    <span className="font-pixel text-[7px] text-[#ffaaaa]">A</span>
                </div>
            </div>

        </div>
    );
}