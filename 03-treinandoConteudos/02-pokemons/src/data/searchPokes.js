
import { reactive, ref } from 'vue';

const pokeData = reactive({
    pokemons: [],
    pokemonsUrls: []
})
const pokeCount = ref(0)

async function searchPokes(params) {
    pokeData.pokemons = []
    console.log(pokeData.pokemons)
    pokeCount.value = 0
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1025`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const pok = await searchPokesFilters(data.results, params, 'name');
        
        for(const poke of pok) {
            const res = await fetch(poke.url);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data2 = await res.json();
            pokeData.pokemons.push(data2);
        }
        addCount(pokeData.pokemons.length)
        console.log(pokeData.pokemons.length)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function searchPokesFilters(items, name, field) {
    const lowerCaseSearchTerm = name.toLowerCase();

  const filteredItens =  items.filter(item => {
    if (item[field]) {
      return String(item[field]).toLowerCase().includes(lowerCaseSearchTerm);
    }
    return false;
  });
  filteredItens.sort((a, b) =>{
    const fieldA = String(a[field]).toLowerCase();
    const fieldB = String(b[field]).toLowerCase();
    
    const startsWithA = fieldA.startsWith(lowerCaseSearchTerm);
    const startsWithB = fieldB.startsWith(lowerCaseSearchTerm);

    if (startsWithA && !startsWithB) {
      return -1;
    }
    if (!startsWithA && startsWithB) {
      return 1;
    }

    return fieldA.localeCompare(fieldB); // Ordena alfabeticamente se ambos começarem ou não com o termo de busca
  });
  return filteredItens
}
function addCount(num) {
  pokeCount.value = num
}
function removeSearch() {
  pokeData.pokemons = []
  pokeCount.value = 0
}
async function getPokemons() {
  for(const url of pokeData.pokemonsUrls) {
      const res = await fetch(url)
      const data = await res.json()
      pokeData.pokemons.push(data)
      console.log(pokeData.pokemons)
  }
}
async function fetchPokeUrls() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0"')
  await res.json().then(res=>{
      res.results.forEach(element => {
          pokeData.pokemonsUrls.push(element.url)
      });
      
      
  })
  await getPokemons()
}
export {addCount,fetchPokeUrls,removeSearch, searchPokes, pokeData, pokeCount }