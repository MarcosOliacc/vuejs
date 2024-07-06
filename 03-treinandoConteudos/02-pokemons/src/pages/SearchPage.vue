<script setup>
import { onMounted, reactive, ref } from 'vue';
import PokeGridSect from '@/components/PokeGrid/PokeGridSect.vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const pokeData = reactive({
    pokemons: []
})
async function searchPokes() {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1025`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const pok = await searchPokesFilters(data.results, route.params.name, 'name');
        
        for(const poke of pok) {
            const res = await fetch(poke.url);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json();
            console.log(data);
            pokeData.pokemons.push(data);
        }
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
onMounted(searchPokes)

</script>
<template>
    <section>

    </section>
    <PokeGridSect :pokemons="pokeData.pokemons"/>
</template>