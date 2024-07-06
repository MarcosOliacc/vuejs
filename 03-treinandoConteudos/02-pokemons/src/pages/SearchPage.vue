<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import PokeGridSect from '@/components/PokeGrid/PokeGridSect.vue'
import { searchPokes,pokeData } from '@/data/searchPokes';

const route = useRoute()
onMounted(()=>{searchPokes(route.params.name)})


</script>
<template>
    <section>

    </section>
    <PokeGridSect :pokemons="pokeData.pokemons"/>
</template>