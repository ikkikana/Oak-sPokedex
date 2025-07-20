export default function PokemonDetailCard() {
    return (
        <div className="relative">
            <div
                className="h-[580px] w-full backdrop-blur-md shadow-md p-6 rounded-tr-2xl rounded-br-2xl border-b-4 border-t-4 border-r-4 border-blue-500/10 bg-cover bg-center z-10"
                style={{backgroundImage: "url('/Image/details.jpg')"}}
            />

            <div
                className="h-[580px] absolute -top-2 -left-2 w-full backdrop-blur-md shadow-lg p-6 rounded-tr-2xl rounded-br-2xl bg-cover bg-center z-20"
                style={{backgroundImage: "url('/Image/details.jpg')"}}
            >
                <div className="flex flex-col gap-3">
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
                    <div className="flex flex-row gap-[240px] justify-center">
                        <div className=" bg-white h-[300px] w-[300px] ml-[80px] mt-[15px]" style= {{backgroundImage: "url('/Image/Dawn.jpg')"}}>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>128.1 lbs - 147.3 lbs.</p>
                            <p>4'11" - 5</p>
                            <h3 className="bg-[#001950] text-white mx-auto pl-3 pr-3 rounded">Preferred foods</h3>
                            <h3 className="bg-[#001950] text-white mx-auto pl-3 pr-3 rounded">Items carried</h3>
                            <p>Sitrus Berry</p>
                            <p>Quick Claw</p>
                        </div>
                    </div>
                    <div className="flex gap-3 ">
                        <div className="bg-gray-500 h-[120px] text-[20px] w-[600px] rounded-2xl p-4 mt-10 text-white ">Hard of the heart debt of the blade, this rare form of Samurott is a product of the pokemon's evolution in the region of Hisui. Its turbulent blow crash into foes like ceaseless pounding waves.</div>
                        <div className="bg-white rounded-2xl p-6 w-[250px] text-center h-[130px]">
                        <h2> Research Level</h2>
                            <div className="flex flex-row justify-around mt-10">
                                <p>Perfect</p>
                                <p>10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}