import { useState } from "react";

const INITIAL_LIST = [
  { id: 1,   name: "Bulbasaur",   number: "001" },
  { id: 2,   name: "Ivysaur",     number: "002" },
  { id: 3,   name: "Venusaur",    number: "003" },
  { id: 4,   name: "Charmander",  number: "004" },
  { id: 5,   name: "Charmeleon",  number: "005" },
  { id: 6,   name: "Charizard",   number: "006" },
  { id: 7,   name: "Squirtle",    number: "007" },
  { id: 8,   name: "Wartortle",   number: "008" },
  { id: 9,   name: "Blastoise",   number: "009" },
  { id: 10,  name: "Caterpie",    number: "010" },
  { id: 11,  name: "Metapod",     number: "011" },
  { id: 12,  name: "Butterfree",  number: "012" },
  { id: 13,  name: "Weedle",      number: "013" },
  { id: 14,  name: "Kakuna",      number: "014" },
  { id: 15,  name: "Beedrill",    number: "015" },
  { id: 16,  name: "Pidgey",      number: "016" },
  { id: 17,  name: "Pidgeotto",   number: "017" },
  { id: 18,  name: "Pidgeot",     number: "018" },
  { id: 19,  name: "Rattata",     number: "019" },
  { id: 20,  name: "Raticate",    number: "020" },
  { id: 21,  name: "Spearow",     number: "021" },
  { id: 22,  name: "Fearow",      number: "022" },
  { id: 23,  name: "Ekans",       number: "023" },
  { id: 24,  name: "Arbok",       number: "024" },
  { id: 25,  name: "Pikachu",     number: "025" },
  { id: 26,  name: "Raichu",      number: "026" },
  { id: 27,  name: "Sandshrew",   number: "027" },
  { id: 28,  name: "Sandslash",   number: "028" },
  { id: 29,  name: "Nidoran F",   number: "029" },
  { id: 30,  name: "Nidorina",    number: "030" },
  { id: 31,  name: "Nidoqueen",   number: "031" },
  { id: 32,  name: "Nidoran M",   number: "032" },
  { id: 33,  name: "Nidorino",    number: "033" },
  { id: 34,  name: "Nidoking",    number: "034" },
  { id: 35,  name: "Clefairy",    number: "035" },
  { id: 36,  name: "Clefable",    number: "036" },
  { id: 37,  name: "Vulpix",      number: "037" },
  { id: 38,  name: "Ninetales",   number: "038" },
  { id: 39,  name: "Jigglypuff",  number: "039" },
  { id: 40,  name: "Wigglytuff",  number: "040" },
  { id: 41,  name: "Zubat",       number: "041" },
  { id: 42,  name: "Golbat",      number: "042" },
  { id: 43,  name: "Oddish",      number: "043" },
  { id: 44,  name: "Gloom",       number: "044" },
  { id: 45,  name: "Vileplume",   number: "045" },
  { id: 46,  name: "Paras",       number: "046" },
  { id: 47,  name: "Parasect",    number: "047" },
  { id: 48,  name: "Venonat",     number: "048" },
  { id: 49,  name: "Venomoth",    number: "049" },
  { id: 50,  name: "Diglett",     number: "050" },
  { id: 51,  name: "Dugtrio",     number: "051" },
  { id: 52,  name: "Meowth",      number: "052" },
  { id: 53,  name: "Persian",     number: "053" },
  { id: 54,  name: "Psyduck",     number: "054" },
  { id: 55,  name: "Golduck",     number: "055" },
  { id: 56,  name: "Mankey",      number: "056" },
  { id: 57,  name: "Primeape",    number: "057" },
  { id: 58,  name: "Growlithe",   number: "058" },
  { id: 59,  name: "Arcanine",    number: "059" },
  { id: 60,  name: "Poliwag",     number: "060" },
  { id: 61,  name: "Poliwhirl",   number: "061" },
  { id: 62,  name: "Poliwrath",   number: "062" },
  { id: 63,  name: "Abra",        number: "063" },
  { id: 64,  name: "Kadabra",     number: "064" },
  { id: 65,  name: "Alakazam",    number: "065" },
  { id: 66,  name: "Machop",      number: "066" },
  { id: 67,  name: "Machoke",     number: "067" },
  { id: 68,  name: "Machamp",     number: "068" },
  { id: 69,  name: "Bellsprout",  number: "069" },
  { id: 70,  name: "Weepinbell",  number: "070" },
  { id: 71,  name: "Victreebel",  number: "071" },
  { id: 72,  name: "Tentacool",   number: "072" },
  { id: 73,  name: "Tentacruel",  number: "073" },
  { id: 74,  name: "Geodude",     number: "074" },
  { id: 75,  name: "Graveler",    number: "075" },
  { id: 76,  name: "Golem",       number: "076" },
  { id: 77,  name: "Ponyta",      number: "077" },
  { id: 78,  name: "Rapidash",    number: "078" },
  { id: 79,  name: "Slowpoke",    number: "079" },
  { id: 80,  name: "Slowbro",     number: "080" },
  { id: 81,  name: "Magnemite",   number: "081" },
  { id: 82,  name: "Magneton",    number: "082" },
  { id: 83,  name: "Farfetchd",   number: "083" },
  { id: 84,  name: "Doduo",       number: "084" },
  { id: 85,  name: "Dodrio",      number: "085" },
  { id: 86,  name: "Seel",        number: "086" },
  { id: 87,  name: "Dewgong",     number: "087" },
  { id: 88,  name: "Grimer",      number: "088" },
  { id: 89,  name: "Muk",         number: "089" },
  { id: 90,  name: "Shellder",    number: "090" },
  { id: 91,  name: "Cloyster",    number: "091" },
  { id: 92,  name: "Gastly",      number: "092" },
  { id: 93,  name: "Haunter",     number: "093" },
  { id: 94,  name: "Gengar",      number: "094" },
  { id: 95,  name: "Onix",        number: "095" },
  { id: 96,  name: "Drowzee",     number: "096" },
  { id: 97,  name: "Hypno",       number: "097" },
  { id: 98,  name: "Krabby",      number: "098" },
  { id: 99,  name: "Kingler",     number: "099" },
  { id: 100, name: "Voltorb",     number: "100" },
  { id: 101, name: "Electrode",   number: "101" },
  { id: 102, name: "Exeggcute",   number: "102" },
  { id: 103, name: "Exeggutor",   number: "103" },
  { id: 104, name: "Cubone",      number: "104" },
  { id: 105, name: "Marowak",     number: "105" },
  { id: 106, name: "Hitmonlee",   number: "106" },
  { id: 107, name: "Hitmonchan",  number: "107" },
  { id: 108, name: "Lickitung",   number: "108" },
  { id: 109, name: "Koffing",     number: "109" },
  { id: 110, name: "Weezing",     number: "110" },
  { id: 111, name: "Rhyhorn",     number: "111" },
  { id: 112, name: "Rhydon",      number: "112" },
  { id: 113, name: "Chansey",     number: "113" },
  { id: 114, name: "Tangela",     number: "114" },
  { id: 115, name: "Kangaskhan",  number: "115" },
  { id: 116, name: "Horsea",      number: "116" },
  { id: 117, name: "Seadra",      number: "117" },
  { id: 118, name: "Goldeen",     number: "118" },
  { id: 119, name: "Seaking",     number: "119" },
  { id: 120, name: "Staryu",      number: "120" },
  { id: 121, name: "Starmie",     number: "121" },
  { id: 122, name: "Mr. Mime",    number: "122" },
  { id: 123, name: "Scyther",     number: "123" },
  { id: 124, name: "Jynx",        number: "124" },
  { id: 125, name: "Electabuzz",  number: "125" },
  { id: 126, name: "Magmar",      number: "126" },
  { id: 127, name: "Pinsir",      number: "127" },
  { id: 128, name: "Tauros",      number: "128" },
  { id: 129, name: "Magikarp",    number: "129" },
  { id: 130, name: "Gyarados",    number: "130" },
  { id: 131, name: "Lapras",      number: "131" },
  { id: 132, name: "Ditto",       number: "132" },
  { id: 133, name: "Eevee",       number: "133" },
  { id: 134, name: "Vaporeon",    number: "134" },
  { id: 135, name: "Jolteon",     number: "135" },
  { id: 136, name: "Flareon",     number: "136" },
  { id: 137, name: "Porygon",     number: "137" },
  { id: 138, name: "Omanyte",     number: "138" },
  { id: 139, name: "Omastar",     number: "139" },
  { id: 140, name: "Kabuto",      number: "140" },
  { id: 141, name: "Kabutops",    number: "141" },
  { id: 142, name: "Aerodactyl",  number: "142" },
  { id: 143, name: "Snorlax",     number: "143" },
  { id: 144, name: "Articuno",    number: "144" },
  { id: 145, name: "Zapdos",      number: "145" },
  { id: 146, name: "Moltres",     number: "146" },
  { id: 147, name: "Dratini",     number: "147" },
  { id: 148, name: "Dragonair",   number: "148" },
  { id: 149, name: "Dragonite",   number: "149" },
  { id: 150, name: "Mewtwo",      number: "150" },
  { id: 151, name: "Mew",         number: "151" },
];

const EMPTY_FORM = { name: "", number: "" };

export default function PokemonListRight({ onSelect }) {
  const [list, setList]             = useState(INITIAL_LIST);
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch]         = useState("");
  const [loading, setLoading]       = useState(false);
  const [panel, setPanel]           = useState(null); // "add" | "edit"
  const [editTarget, setEditTarget] = useState(null);
  const [form, setForm]             = useState(EMPTY_FORM);
  const [toast, setToast]           = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };

  const filtered = list.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.number.includes(search)
  );

  // ── Sélection + fetch PokeAPI ──────────────────────────────────
  const handleClick = async (pokemon) => {
    if (loading) return;
    setSelectedId(pokemon.id);
    setLoading(true);
    try {
      const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
      const data = await res.json();
      const statsMap = {};
      data.stats.forEach((s) => { statsMap[s.stat.name] = s.base_stat; });
      const enriched = {
        id:     pokemon.id,
        name:   pokemon.name,
        image:  data.sprites.other["official-artwork"].front_default,
        number: pokemon.number,
        type:   data.types.map((t) => t.type.name.toUpperCase()),
        weight: (data.weight / 10).toFixed(1),
        height: (data.height / 10).toFixed(1),
        stats: {
          hp:    statsMap["hp"]              ?? 0,
          atk:   statsMap["attack"]          ?? 0,
          def:   statsMap["defense"]         ?? 0,
          spa:   statsMap["special-attack"]  ?? 0,
          spd:   statsMap["special-defense"] ?? 0,
          speed: statsMap["speed"]           ?? 0,
        },
      };
      if (onSelect) onSelect(enriched);
    } catch {
      showToast("ERREUR API", "error");
    } finally {
      setLoading(false);
    }
  };

  // ── Panneau ajout ──────────────────────────────────────────────
  const openAdd = () => {
    setForm(EMPTY_FORM);
    setEditTarget(null);
    setPanel("add");
  };

  // ── Panneau édition ────────────────────────────────────────────
  const openEdit = (e, pokemon) => {
    e.stopPropagation();
    setForm({ name: pokemon.name, number: pokemon.number });
    setEditTarget(pokemon);
    setPanel("edit");
  };

  const closePanel = () => {
    setPanel(null);
    setEditTarget(null);
    setForm(EMPTY_FORM);
  };

  // ── CRUD ───────────────────────────────────────────────────────
  const handleAdd = () => {
    if (!form.name.trim() || !form.number.trim()) {
      showToast("REMPLIS TOUS LES CHAMPS", "error");
      return;
    }
    setList((prev) => [...prev, { id: Date.now(), name: form.name.trim(), number: form.number.trim() }]);
    showToast(`${form.name.toUpperCase()} AJOUTE !`);
    closePanel();
  };

  const handleEdit = () => {
    if (!form.name.trim() || !form.number.trim()) {
      showToast("REMPLIS TOUS LES CHAMPS", "error");
      return;
    }
    setList((prev) =>
        prev.map((p) =>
            p.id === editTarget.id ? { ...p, name: form.name.trim(), number: form.number.trim() } : p
        )
    );
    showToast(`${form.name.toUpperCase()} MODIFIE !`);
    closePanel();
  };

  const handleDelete = (e, pokemon) => {
    e.stopPropagation();
    setList((prev) => prev.filter((p) => p.id !== pokemon.id));
    if (selectedId === pokemon.id) {
      setSelectedId(null);
      if (onSelect) onSelect(null);
    }
    showToast(`${pokemon.name.toUpperCase()} SUPPRIME !`);
    if (panel === "edit" && editTarget?.id === pokemon.id) closePanel();
  };

  const inputCls =
      "w-full bg-[#0f380f] border-2 border-[#306230] rounded px-2 py-1 font-pixel text-[8px] text-[#9bbc0f] outline-none placeholder-[#306230] caret-[#9bbc0f]";

  return (
      <div className="flex gap-3 relative">

        {/* ── Liste principale ──────────────────────────────────── */}
        <div className="bg-[#CC0000] border-4 border-[#990000] rounded-2xl p-4 flex flex-col gap-3 min-h-[420px] lg:min-h-[580px] flex-1 min-w-0">

          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-pixel text-[#FFD700] text-[10px]">POKEDEX</span>
            {loading
                ? <span className="font-pixel text-[#9bbc0f] text-[7px] animate-pulse">CHARGEMENT...</span>
                : <span className="font-pixel text-[#ffaaaa] text-[8px]">{filtered.length}/{list.length}</span>
            }
          </div>

          {/* Recherche */}
          <div className="bg-[#0f380f] border-2 border-[#306230] rounded px-2 py-1 flex items-center gap-2">
            <span className="font-pixel text-[#9bbc0f] text-[8px]">&gt;</span>
            <input
                type="text"
                placeholder="RECHERCHER..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent font-pixel text-[#9bbc0f] text-[8px] outline-none w-full placeholder-[#306230] caret-[#9bbc0f]"
            />
          </div>

          {/* Liste */}
          <div className="bg-[#333] border-4 border-[#222] rounded-lg overflow-hidden flex-1">
            <div className="bg-[#0f380f] max-h-[300px] lg:max-h-[360px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#9bbc0f] scrollbar-track-[#0f380f]">
              {filtered.length === 0
                  ? <p className="font-pixel text-[#9bbc0f] text-[8px] text-center p-4 opacity-60">AUCUN RESULTAT</p>
                  : filtered.map((pokemon) => (
                      <div
                          key={pokemon.id}
                          onClick={() => handleClick(pokemon)}
                          className={`flex items-center gap-1 px-2 py-2 border-b border-[#306230] cursor-pointer transition-colors group ${
                              selectedId === pokemon.id ? "bg-[#306230]" : "hover:bg-[#1a4a1a]"
                          }`}
                      >
                  <span className="font-pixel text-[#9bbc0f] text-[8px] w-2 flex-shrink-0">
                    {selectedId === pokemon.id ? "▶" : " "}
                  </span>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                            alt={pokemon.name}
                            className="w-6 h-6 object-contain flex-shrink-0"
                            style={{ imageRendering: "pixelated" }}
                        />
                        <span className="font-pixel text-[7px] text-[#9bbc0f] opacity-60 w-7 flex-shrink-0">
                    #{pokemon.number}
                  </span>
                        <span className={`font-pixel text-[8px] flex-1 truncate ${
                            selectedId === pokemon.id ? "text-[#FFD700]" : "text-[#9bbc0f]"
                        }`}>
                    {pokemon.name.toUpperCase()}
                  </span>
                        {/* Boutons EDIT / DEL — visibles au hover */}
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                          <button
                              onClick={(e) => openEdit(e, pokemon)}
                              className="bg-[#FFD700] text-[#0f380f] font-pixel text-[6px] px-1 py-0.5 rounded border border-[#cc9900] hover:bg-yellow-300"
                          >
                            EDIT
                          </button>
                          <button
                              onClick={(e) => handleDelete(e, pokemon)}
                              className="bg-[#880000] text-[#ffaaaa] font-pixel text-[6px] px-1 py-0.5 rounded border border-[#660000] hover:bg-red-800"
                          >
                            DEL
                          </button>
                        </div>
                      </div>
                  ))
              }
            </div>
          </div>

          {/* Bouton + AJOUTER */}
          <div className="flex justify-between items-center">
            <button
                onClick={openAdd}
                className="bg-[#9bbc0f] text-[#0f380f] font-pixel text-[8px] px-3 py-1.5 rounded border-2 border-[#306230] hover:bg-[#c6e840] transition-colors"
            >
              + AJOUTER
            </button>
            <div className="flex gap-2">
              <div className="bg-[#880000] rounded px-2 py-1 border border-[#660000]">
                <span className="font-pixel text-[7px] text-[#ffaaaa]">SELECT</span>
              </div>
              <div className="bg-[#880000] rounded px-2 py-1 border border-[#660000]">
                <span className="font-pixel text-[7px] text-[#ffaaaa]">START</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Panneau latéral ───────────────────────────────────── */}
        {panel && (
            <div className="bg-[#CC0000] border-4 border-[#990000] rounded-2xl p-4 flex flex-col gap-3 w-[190px] flex-shrink-0">

              <div className="flex items-center justify-between">
            <span className="font-pixel text-[#FFD700] text-[9px]">
              {panel === "add" ? "AJOUTER" : "MODIFIER"}
            </span>
                <button onClick={closePanel} className="font-pixel text-[#ffaaaa] text-[12px] hover:text-white leading-none">
                  x
                </button>
              </div>

              {/* Aperçu sprite si édition */}
              {panel === "edit" && editTarget && (
                  <div className="bg-[#0f380f] border-2 border-[#306230] rounded flex items-center justify-center p-2">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${editTarget.id}.png`}
                        alt={editTarget.name}
                        className="w-12 h-12 object-contain"
                        style={{ imageRendering: "pixelated" }}
                    />
                  </div>
              )}

              {/* Champ nom */}
              <div className="flex flex-col gap-1">
                <label className="font-pixel text-[#ffaaaa] text-[7px]">NOM</label>
                <input
                    type="text"
                    placeholder="Ex: Pikachu"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className={inputCls}
                />
              </div>

              {/* Champ numéro */}
              <div className="flex flex-col gap-1">
                <label className="font-pixel text-[#ffaaaa] text-[7px]">NUMERO</label>
                <input
                    type="text"
                    placeholder="Ex: 025"
                    value={form.number}
                    onChange={(e) => setForm((f) => ({ ...f, number: e.target.value }))}
                    className={inputCls}
                />
              </div>

              {/* Confirmer */}
              <button
                  onClick={panel === "add" ? handleAdd : handleEdit}
                  className="bg-[#9bbc0f] text-[#0f380f] font-pixel text-[8px] px-3 py-2 rounded border-2 border-[#306230] hover:bg-[#c6e840] transition-colors w-full mt-auto"
              >
                {panel === "add" ? "CONFIRMER" : "SAUVER"}
              </button>

              {/* Supprimer (seulement en mode edit) */}
              {panel === "edit" && editTarget && (
                  <button
                      onClick={(e) => handleDelete(e, editTarget)}
                      className="bg-[#880000] text-[#ffaaaa] font-pixel text-[8px] px-3 py-2 rounded border-2 border-[#660000] hover:bg-red-800 transition-colors w-full"
                  >
                    SUPPRIMER
                  </button>
              )}
            </div>
        )}

        {/* ── Toast ─────────────────────────────────────────────── */}
        {toast && (
            <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2 rounded border-2 font-pixel text-[8px] whitespace-nowrap ${
                toast.type === "error"
                    ? "bg-[#880000] text-[#ffaaaa] border-[#CC0000]"
                    : "bg-[#0f380f] text-[#9bbc0f] border-[#306230]"
            }`}>
              {toast.type === "success" ? "OK  " : "ERR "}{toast.msg}
            </div>
        )}
      </div>
  );
}