import PokemonDetailCard from "./PokemonDetailCard.jsx";
import PokemonListSidebar from "./PokemonListSidebar.jsx";

export default function PokedexPage() {
    return(
        <div className="min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover bg-center brightness-75" style={{backgroundImage: "url('/Image/pixelart.gif')"}} />
            <div className="relative z-10  flex gap-10 pt-10 pr-5 pb-10">
                <div className="w-[70%]">
                    <PokemonDetailCard/>
                </div>
                <div className="w-[30%]">
                    <PokemonListSidebar/>
                </div>
            </div>
        </div>
    );
}