<script setup lang="ts">
import { useSearchHistory } from '@/data/useSeachHistory';
const searchHistory = useSearchHistory()
</script>

<template>
    <h1>Welcome!!</h1>
    <p>Essa é a pagina inicial do app</p>
    <section>
        <p v-for="user in searchHistory.users" :key="user">{{ user }}</p>
    </section>
</template>