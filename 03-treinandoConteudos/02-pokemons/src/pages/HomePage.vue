<script setup>
    import PokeGridSect from '@/components/PokeGrid/PokeGridSect.vue';
    import WhoIsSect from '@/components/WhoIsSect/WhoIsSect.vue';
    import { onBeforeMount, onMounted, reactive } from 'vue';
    import { pokeData, fetchPokeUrls } from '@/data/searchPokes';
    onBeforeMount(fetchPokeUrls)
</script>
<template>
    <div class="conteiner">
        <WhoIsSect/>
        <PokeGridSect v-if="pokeData.pokemons.length< 15"/>

    </div>
    
</template>