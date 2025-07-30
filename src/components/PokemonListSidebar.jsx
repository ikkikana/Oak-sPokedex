export default function PokemonListSidebar() {
  return (
    <div className="absolute right-0 top-0 h-full w-72 bg-white/10 backdrop-blur-md p-6 rounded-l-xl shadow-xl">
     <h2 className="text-white text-xl font-semibold mb-6 border-2 border-white rounded-lg px-4 py-2 inline-block hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
  Entire Hisui Region
</h2>
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[75vh] pr-2">

        <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/10">
          <div className="flex items-center gap-4">
             <span className="w-5" />
            <img src="/Image/pokemon logo.png" alt="" className="w-10 h-10" />
            <span className="text-white font-medium capitalize">Quilava</span>
          </div>
          <img src="/Image/Black.jpg" alt="pokeball" className="w-5 h-5" />
        </button>

        <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/10">
          <div className="flex items-center gap-4">
            <span className="w-5" />
            <img src="/Image/pokemon logo.png" alt="" className="w-10 h-10" />
            <span className="text-white font-medium capitalize">Typhlosion</span>
          </div>
          <img src="/Image/Black.jpg" alt="pokeball" className="w-5 h-5" />
        </button>

        <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-white/20">
          <div className="flex items-center gap-4">
            <span className="text-yellow-400 font-bold text-lg">➤</span>
            <img src="/Image/pokemon logo.png" alt="" className="w-10 h-10" />
            <span className="text-white font-medium capitalize">Samurott</span>
          </div>
          <img src="/Image/Black.jpg" alt="pokeball" className="w-5 h-5" />
        </button>

        <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/10">
          <div className="flex items-center gap-4">
            <span className="w-5" />
            <img src="/Image/pokemon logo.png" alt="" className="w-10 h-10" />
            <span className="text-white font-medium capitalize">Dewott</span>
          </div>
          <img src="/Image/Black.jpg" alt="pokeball" className="w-5 h-5" />
        </button>

        <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/10">
          <div className="flex items-center gap-4">
            <span className="w-5" />
            <img src="/Image/pokemon logo.png" alt="" className="w-10 h-10" />
            <span className="text-white font-medium capitalize">Oshawott</span>
          </div>
          <img src="/Image/Black.jpg" alt="pokeball" className="w-5 h-5" />
        </button>

        

        <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/10">
          <div className="flex items-center gap-4">
            <span className="w-5" />
            <img src="/Image/pokemon logo.png" alt="" className="w-10 h-10" />
            <span className="text-white font-medium capitalize">Rowlet</span>
          </div>
          <img src="/Image/Black.jpg" alt="pokeball" className="w-5 h-5" />
        </button>

        <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/10">
          <div className="flex items-center gap-4">
            <span className="w-5" />
            <img src="/Image/pokemon logo.png" alt="" className="w-10 h-10" />
            <span className="text-white font-medium capitalize">Dartrix</span>
          </div>
          <img src="/Image/Black.jpg" alt="pokeball" className="w-5 h-5" />
        </button>

        <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/10">
          <div className="flex items-center gap-4">
            <span className="w-5" />
            <img src="/Image/pokemon logo.png" alt="" className="w-10 h-10" />
            <span className="text-white font-medium capitalize">Decidueye</span>
          </div>
          <img src="/Image/Black.jpg" alt="pokeball" className="w-5 h-5" />
        </button>

        <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/10">
          <div className="flex items-center gap-4">
            <span className="w-5" />
            <img src="/Image/pokemon logo.png" alt="" className="w-10 h-10" />
            <span className="text-white font-medium capitalize">Pikachu</span>
          </div>
          <img src="/Image/Black.jpg" alt="pokeball" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
