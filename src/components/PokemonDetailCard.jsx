import PokemonListSidebar from "./PokemonListSidebar.jsx";

export default function PokemonDetailCard() {
    return (
        <div className="relative">
            <div
                className="h-[580px] w-full backdrop-blur-md shadow-md p-6 rounded-tr-2xl rounded-br-2xl border-b-4 border-t-4 border-r-4 border-blue-500/10 bg-cover bg-center z-10"
                style={{ backgroundImage: "url('/Image/details.jpg')" }}
            />

            <div
                className="h-[580px] absolute -top-2 -left-2 w-full backdrop-blur-md shadow-lg p-6 rounded-tr-2xl rounded-br-2xl bg-cover bg-center z-20"
                style={{ backgroundImage: "url('/Image/details.jpg')" }}
            >
                <div className="flex flex-col gap-3 h-full">
                    <div className="flex justify-between items-center bg-[#001950] p-2 rounded-lg">
                        <div className="flex items-center gap-4">
                            <span className="text-white font-bold font-mono bg-black px-2 rounded">N. 009</span>
                            <span className="text-white font-semibold">Samurott</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-white font-semibold">Drill Pokemon</span>
                            <span className="text-white font-semibold bg-blue-500 px-2 rounded">WATER</span>
                            <span className="text-white font-semibold bg-gray-800 px-2 rounded">DARK</span>
                        </div>
                    </div>

                    <div className="flex flex-1 items-start justify-between">
                        <div className="h-[320px] w-[320px] flex items-center justify-center">
                            <img
                                src="/Image/Dawn.jpg"
                                alt="Samurott"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <div className="flex flex-col gap-4 pr-4 items-end text-right">
                            <div className="flex gap-10 border border-gray-300 rounded-xl px-6 py-4">
                                <div>
                                    <p className="text-base text-gray-600 font-semibold">Weight</p>
                                    <p className="text-2xl font-bold text-gray-800">128.1 lbs</p>
                                </div>
                                <div>
                                    <p className="text-base text-gray-600 font-semibold">Height</p>
                                    <p className="text-2xl font-bold text-gray-800">4'11"</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-[#001950] mb-2">Preferred Foods</h3>
                                <div className="flex gap-3 border border-gray-300 rounded-md p-2">
                                    <img src="/icons/berry1.png" alt="Berry 1" className="w-6 h-6" />
                                    <img src="/icons/berry2.png" alt="Berry 2" className="w-6 h-6" />
                                    <img src="/icons/claw.png" alt="Quick Claw" className="w-6 h-6" />
                                    <img src="/icons/food4.png" alt="Food 4" className="w-6 h-6" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-[#001950] mb-2">Carried Item</h3>
                                <div className="px-4 py-2 bg-white/60 border border-gray-400 rounded-md shadow-sm text-sm font-medium">
                                    Quick Claw
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-gray-500/80 h-[120px] text-lg w-[600px] rounded-2xl p-4 text-white flex items-center">
                            <p className="leading-snug">Steeled by battles and sharpened by time, this rare form of Samurott is the result of evolution in the ancient Hisui region...</p>
                        </div>

                        <div className="bg-white border-4 border-gray-800 rounded-2xl w-[180px] h-[120px] flex flex-col items-center justify-center relative">
                            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold absolute -top-2">
                                Research Lv.
                            </span>
                            <span className="text-3xl font-bold">10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
