<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const searchInput = ref('')

async function handleSearch(ev) {
    router.replace(`/search/${searchInput.value}`)
    
}

</script>
<template>
    <form @submit="handleSearch" action="#">
        <input type="text" class="searchInput"
        placeholder="Procurando Pokemons?"
        v-model="searchInput">
        <button type="submit" class="searchBtn"><img class="searchIcon" src="/searchIcon.svg" alt=""></button>
    </form>
</template>
<style scoped>
@import './styles.scss';
</style>