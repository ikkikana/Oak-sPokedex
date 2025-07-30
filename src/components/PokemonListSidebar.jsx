import { useState } from 'react';

export default function PokemonListRight() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showPokemon, setShowPokemon] = useState(false);

  const pokemonList = [
    { id: 1, name: ' Bulbasaur',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' ,number: '001', type: 'FIRE', selected: false },
    { id: 2, name: 'Ivysaur',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png' ,number: '002', type: 'FIRE', selected: false },
    { id: 3, name: 'Venusaur',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png' ,number: '003', type: 'WATER/DARK', selected: false },
    { id: 4, name: 'Charmander',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' ,number: '004', type: 'WATER', selected: false },
    { id: 5, name: 'Charmeleon',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png' ,number: '005',  type: 'WATER', selected: false },
    {id: 6, name: 'Charizard',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png' ,number: '006', type: 'WATER', selected: false },
    {id: 7, name: 'Squirtle',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png' ,number: '007', type: 'WATER', selected: false },
    {id: 8, name: 'Wartortle',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png' ,number: '008', type: 'WATER', selected: false },
    {id: 9, name: 'Blastoise',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png' ,number: '009', type: 'WATER, Bite', selected: false },
    {id: 10, name: ' Caterpie',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png' ,number: '010', type: 'WATER', selected: false },
    {id: 11, name: 'Metapod',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png' ,number: '011', type: 'WATER', selected: false },
    {id: 12, name: 'Butterfree',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png' ,number: '012', type: 'WATER', selected: false },
    {id: 13, name: 'Weedle',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png' ,number: '013', type: 'WATER', selected: false },
    {id: 14, name: 'Kakuna',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png' ,number: '014', type: 'WATER', selected: false },
    {id: 15, name: 'Beedrill',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png' ,number: '015', type: 'WATER', selected: false },
    {id: 16, name: 'Pidgey',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png' ,number: '016', type: 'WATER', selected: false },
    {id: 17, name: 'Pidgeotto',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png' ,number: '017', type: 'WATER', selected: false },
    {id: 18, name: 'Pidgeot',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png' ,number: '018', type: 'WATER', selected: false },
    {id: 19, name: 'Rattata',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png' ,number: '019', type: 'WATER', selected: false },
    {id: 20, name: ' Raticate',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png' ,number: '020', type: 'WATER', selected: false },
    {id: 21, name: 'Spearow',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png' ,number: '021', type: 'WATER', selected: false },
    {id: 22, name: 'Fearow',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png' ,number: '022', type: 'WATER', selected: false },
    {id: 23, name: ' Ekans',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png' ,number: '023', type: 'WATER', selected: false },
    {id: 24, name: 'Arbok',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png' ,number: '024', type: 'WATER', selected: false },
    {id: 25, name: 'Pikachu',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' ,number: '025', type: 'WATER', selected: false },
    {id: 26, name: 'Raichu',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png' ,number: '026', type: 'WATER', selected: false },
    {id: 27, name: 'Sandshrew',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png' ,number: '027', type: 'WATER', selected: false },
    {id: 28, name: 'Sandslash',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png' ,number: '028', type: 'WATER', selected: false },
    {id: 29, name: 'Nidoran♀',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png' ,number: '029', type: 'WATER', selected: false },
    {id: 30, name: 'Nidorina',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png' ,number: '030', type: 'WATER', selected: false },
    {id: 31, name: ' Nidoqueen',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png' ,number: '031', type: 'WATER', selected: false },
    {id: 32, name: 'Nidoran♂',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png' ,number: '032', type: 'WATER', selected: false },
    {id: 33, name: 'Nidorino',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png' ,number: '033', type: 'WATER', selected: false },
    {id: 34, name: 'Nidoking',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png' ,number: '034', type: 'WATER', selected: false },
    {id: 35, name: 'Clefairy',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png' ,number: '035', type: 'WATER', selected: false },
    {id: 36, name: ' Clefable',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png' ,number: '036', type: 'WATER', selected: false },
    {id: 37, name: 'Vulpix',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png' ,number: '037', type: 'WATER', selected: false },
    {id: 38, name: 'Ninetales',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png' ,number: '038', type: 'WATER', selected: false },
    {id: 39, name: 'Jigglypuff',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png' ,number: '039', type: 'WATER', selected: false },
    {id: 40, name: 'Wigglytuff',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png' ,number: '040', type: 'WATER', selected: false },
    {id: 41, name: 'Zubat',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png' ,number: '041', type: 'WATER', selected: false },
    {id: 42, name: 'Golbat',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png' ,number: '042', type: 'WATER', selected: false },
    {id: 43, name: 'Oddish',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png' ,number: '043', type: 'WATER', selected: false },
    {id: 44, name: 'Gloom',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png' ,number: '044', type: 'WATER', selected: false },
    {id: 45, name: 'Vileplume',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png' ,number: '045', type: 'WATER', selected: false },
    {id: 46, name: 'Paras',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png' ,number: '046', type: 'WATER', selected: false },
    {id: 47, name: 'Parasect',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png' ,number: '047', type: 'WATER', selected: false },
    {id: 48, name: 'Venonat',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png' ,number: '048', type: 'WATER', selected: false },
    {id: 49, name: 'Venomoth',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png' ,number: '049', type: 'WATER', selected: false },
    {id: 50, name: 'Diglett',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png' ,number: '050', type: 'WATER', selected: false },
    {id: 51, name: 'Dugtrio',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png' ,number: '051', type: 'WATER', selected: false },
    {id: 52, name: 'Meowth',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png' ,number: '052', type: 'WATER', selected: false },
    {id: 53, name: 'Persian',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png' ,number: '053', type: 'WATER', selected: false },
    {id: 54, name: ' Psyduck',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png' ,number: '054', type: 'WATER', selected: false },
    {id: 55, name: 'Golduck',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png' ,number: '055', type: 'WATER', selected: false },
    {id: 56, name: 'Mankey',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png' ,number: '056', type: 'WATER', selected: false },
    {id: 57, name: 'Primeape',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png' ,number: '057', type: 'WATER', selected: false },
    {id: 58, name: 'Growlithe',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png' ,number: '058', type: 'WATER', selected: false },
    {id: 59, name: 'Arcanine',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png' ,number: '059', type: 'WATER', selected: false },
    {id: 60, name: 'Poliwag',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png' ,number: '060', type: 'WATER', selected: false },
    {id: 61, name: 'Poliwhirl',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png' ,number: '061', type: 'WATER', selected: false },
    {id: 62, name: 'Poliwrath',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png' ,number: '062', type: 'WATER', selected: false },
    {id: 63, name: 'Abra',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png' ,number: '063', type: 'WATER', selected: false },
    {id: 64, name: 'Kadabra',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png' ,number: '064', type: 'WATER', selected: false },
    {id: 65, name: 'Alakazam',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png' ,number: '065', type: 'WATER', selected: false },
    {id: 66, name: 'Machop',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png' ,number: '066', type: 'WATER', selected: false },
    {id: 67, name: 'Machoke',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png' ,number: '067', type: 'WATER', selected: false },
    {id: 68, name: 'Machamp',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png' ,number: '068', type: 'WATER', selected: false },
    {id: 69, name: 'Bellsprout',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png' ,number: '069', type: 'WATER', selected: false },
    {id: 70, name: 'Weepinbell',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png' ,number: '070', type: 'WATER', selected: false },
    {id: 71, name: 'Victreebel',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png' ,number: '071', type: 'WATER', selected: false },
    {id: 72, name: 'Tentacool',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png' ,number: '072', type: 'WATER', selected: false },
    {id: 73, name: 'Tentacruel',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png' ,number: '073', type: 'WATER', selected: false },
    {id: 74, name: 'Geodude',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png' ,number: '074', type: 'WATER', selected: false },
    {id: 75, name: 'Graveler',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png' ,number: '075', type: 'WATER', selected: false },
    {id: 76, name: 'Golem',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png' ,number: '076', type: 'WATER', selected: false },
    {id: 77, name: 'Ponyta',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png' ,number: '077', type: 'WATER', selected: false },
    {id: 78, name: 'Rapidash',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png' ,number: '078', type: 'WATER', selected: false },
    {id: 79, name: 'Slowpoke',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png' ,number: '079', type: 'WATER', selected: false },
    {id: 80, name: 'Slowbro',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png' ,number: '080', type: 'WATER', selected: false },
    {id: 81, name: 'Magnemite',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png' ,number: '081', type: 'WATER', selected: false },
    {id: 82, name: 'Magneton',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png' ,number: '082', type: 'WATER', selected: false },
    {id: 83, name: 'Farfetch',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png' ,number: '083', type: 'WATER', selected: false },
    {id: 84, name: 'Doduo',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png' ,number: '084', type: 'WATER', selected: false },
    {id: 85, name: 'Dodrio',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png' ,number: '085', type: 'WATER', selected: false },
    {id: 86, name: 'Seel',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png' ,number: '086', type: 'WATER', selected: false },
    {id: 87, name: 'Dewgong',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png' ,number: '087', type: 'WATER', selected: false },
    {id: 88, name: 'Grimer',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png' ,number: '088', type: 'WATER', selected: false },
    {id: 89, name: 'Muk',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png' ,number: '089', type: 'WATER', selected: false },
    {id: 90, name: 'Shellder',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png' ,number: '090', type: 'WATER', selected: false },
    {id: 91, name: 'Cloyster',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png' ,number: '091', type: 'WATER', selected: false },
    {id: 92, name: 'Gastly',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png' ,number: '092', type: 'WATER', selected: false },
    {id: 93, name: 'Haunter',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png' ,number: '093', type: 'WATER', selected: false },
    {id: 94, name: 'Gengar',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png' ,number: '094', type: 'WATER', selected: false },
    {id: 95, name: ' Onix',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png' ,number: '095', type: 'WATER', selected: false },
    {id: 96, name: 'Drowzee',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png' ,number: '096', type: 'WATER', selected: false },
    {id: 97, name: 'Hypno',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png' ,number: '097', type: 'WATER', selected: false },
    {id: 98, name: 'Krabby',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png' ,number: '098', type: 'WATER', selected: false },
    {id: 99, name: 'Kingler',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png' ,number: '099', type: 'WATER', selected: false },
    {id: 100, name: 'Voltorb',image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png' ,number: '100', type: 'WATER', selected: false },
    { id: 101, name: 'Electrode', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png', number: '101', type: 'FIRE', selected: false },
    { id: 102, name: 'Exeggcute', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png', number: '102', type: 'WATER', selected: false },
    { id: 103, name: 'Exeggutor', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png', number: '103', type: 'GRASS', selected: false },
    { id: 104, name: 'Cubone', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png', number: '104', type: 'FIRE', selected: false },
    { id: 105, name: ' Marowak', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png', number: '105', type: 'WATER', selected: false },
    { id: 106, name: 'Hitmonlee', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png', number: '106', type: 'GRASS', selected: false },
    { id: 107, name: 'Hitmonchan', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png', number: '107', type: 'FIRE', selected: false },
    { id: 108, name: 'Lickitung', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png', number: '108', type: 'WATER', selected: false },
    { id: 109, name: 'Koffing', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png', number: '109', type: 'FIRE', selected: false },
    { id: 110, name: 'Weezing', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png', number: '110', type: 'WATER', selected: false },
    { id: 111, name: 'Rhyhorn', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png', number: '111', type: 'GRASS', selected: false },
    { id: 112, name: 'Rhydon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png', number: '112', type: 'FIRE', selected: false },
    { id: 113, name: 'Chansey', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png', number: '113', type: 'WATER', selected: false },
    { id: 114, name: 'Tangela', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png', number: '114', type: 'GRASS', selected: false },
    { id: 115, name: 'Kangaskhan', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png', number: '115', type: 'FIRE', selected: false },
    { id: 116, name: 'Horsea', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png', number: '116', type: 'WATER', selected: false },
    { id: 117, name: 'Seadra', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png', number: '117', type: 'GRASS', selected: false },
    { id: 118, name: 'Goldeen', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png', number: '118', type: 'FIRE', selected: false },
    { id: 119, name: 'Seaking', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png', number: '119', type: 'WATER', selected: false },
    { id: 120, name: 'Staryu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png', number: '120', type: 'GRASS', selected: false },
    { id: 121, name: 'Starmie', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png', number: '121', type: 'FIRE', selected: false },
    { id: 122, name: ' Mr. Mime', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png', number: '122', type: 'WATER', selected: false },
    { id: 123, name: 'Scyther', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png', number: '123', type: 'GRASS', selected: false },
    { id: 124, name: 'Jynx', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png', number: '124', type: 'FIRE', selected: false },
    { id: 125, name: 'Electabuzz', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png', number: '125', type: 'WATER', selected: false },
    { id: 126, name: 'Magmar', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png', number: '126', type: 'GRASS', selected: false },
    { id: 127, name: 'Pinsir', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png', number: '127', type: 'FIRE', selected: false },
    { id: 128, name: 'Tauros', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png', number: '128', type: 'WATER', selected: false },
    { id: 129, name: 'Magikarp', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png', number: '129', type: 'GRASS', selected: false },
    { id: 130, name: 'Gyarados', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png', number: '130', type: 'FIRE', selected: false },
    { id: 131, name: 'Lapras', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png', number: '131', type: 'WATER', selected: false },
    { id: 132, name: 'Ditto', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', number: '132', type: 'GRASS', selected: false },
    { id: 133, name: 'Eevee', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png', number: '133', type: 'FIRE', selected: false },
    { id: 134, name: 'Vaporeon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png', number: '134', type: 'WATER', selected: false },
    { id: 135, name: 'Jolteon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png', number: '135', type: 'GRASS', selected: false },
    { id: 136, name: 'Flareon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png', number: '136', type: 'FIRE', selected: false },
    { id: 137, name: 'Porygon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png', number: '137', type: 'WATER', selected: false },
    { id: 138, name: 'Omanyte', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png', number: '138', type: 'GRASS', selected: false },
    { id: 139, name: 'Omastar', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png', number: '139', type: 'FIRE', selected: false },
    { id: 140, name: 'Kabuto', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png', number: '140', type: 'WATER', selected: false },
  { id: 141, name: 'Kabutops', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png', number: '141', type: 'GRASS', selected: false },
    { id: 142, name: 'Aerodactyl', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png', number: '142', type: 'FIRE', selected: false },
    { id: 143, name: 'Snorlax', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png', number: '143', type: 'WATER', selected: false },
    { id: 144, name: 'Articuno', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png', number: '144', type: 'GRASS', selected: false },
    { id: 145, name: 'Zapdos', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png', number: '145', type: 'FIRE', selected: false },
    { id: 146, name: 'Moltres', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png', number: '146', type: 'WATER', selected: false },
    { id: 147, name: 'Dratini', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png', number: '147', type: 'GRASS', selected: false },
    { id: 148, name: 'Dragonair', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png', number: '148', type: 'FIRE', selected: false },
    { id: 149, name: 'Dragonite', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png', number: '149', type: 'WATER', selected: false },
    { id: 150, name: 'Mewtwo', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png', number: '150', type: 'GRASS', selected: false },
    { id: 151, name: 'Mew', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png', number: '151', type: 'FIRE', selected: false },
];

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowPokemon(true);
  };

  return (
    <div className="min-h-screen bg-transparent">
        <div className="lg:col-span-2">
          {/* contenu central ici */}
          {showPokemon && selectedPokemon ? (
            <div className="bg-transparent w-auto h-auto rounded-xl absolute left-14 top-24  z-30">
              <h2 className="text-4xl font-bold text-white mb-4">
                {selectedPokemon.number}
              </h2>
              <img src={selectedPokemon.image} alt={selectedPokemon.name} className='h-32' />
            </div>
            
          ) : (
            <div className="bg-white rounded-xl shadow-md h-full flex items-center justify-center p-6">
              <p className="text-gray-500 text-lg">Sélectionnez un Pokémon</p>
            </div>
          )}
        </div>
      {/* Partie droite*/}
      <div className="max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100">
  {/* Contenu */}

        <div className="lg:col-span-1 bg-white/25 shadow-md p-6 order-first lg:order-last text-black font-bold text-">
          <h1 className="text-2xl font-bold text-gray-400 mb-6 ">Les 151 pokemon</h1>
          
          <div className="space-y-3">
            {pokemonList.map((pokemon) => (
              <div
                key={pokemon.id}
                onClick={() => handlePokemonClick(pokemon)}
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                  pokemon.selected ? 'bg-blue-100' : 'hover:bg-gray-100'
                }`}
              >
                <input
                  type="checkbox"
                  checked={pokemon.selected}
                  readOnly
                  className="mr-3 h-5 w-5 appearance-none"
                />
                <span className="font-medium">{pokemon.name}</span>
                <span className="ml-auto text-sm text-gray-500">{pokemon.number}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
  );
}