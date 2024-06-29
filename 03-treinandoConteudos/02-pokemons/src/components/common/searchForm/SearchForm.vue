<script setup>
import { ref } from 'vue';

const searchInput = ref('')

async function handleSearch(ev) {
    ev.preventDefault()
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1302`)
    const data = await res.json()
    console.log(data)
    console.log(searchPokes(data.results, searchInput.value, 'name'))
}
function searchPokes(items, name, field) {
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
</script>
<template>
    <form @submit="handleSearch" action="#">
        <input type="text" class="searchInput"
        placeholder="Hunt Pokemons?"
        v-model="searchInput">
        <button type="submit" class="searchBtn"><img class="searchIcon" src="/searchIcon.svg" alt=""></button>
        </form>
</template>