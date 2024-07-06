<script setup>
import { searchPokes } from '@/data/searchPokes';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const searchInput = ref('')

async function handleSearch(ev) {
    ev.preventDefault()
    router.replace(`/search/${searchInput.value}`)
    searchPokes(searchInput.value)
}

</script>
<template>
    <form @submit="handleSearch">
        <input type="text" class="searchInput"
        placeholder="Procurando Pokemons?"
        v-model="searchInput">
        <button type="submit" class="searchBtn"><img class="searchIcon" src="/searchIcon.svg" alt=""></button>
    </form>
</template>
<style scoped>
@import './styles.scss';
</style>