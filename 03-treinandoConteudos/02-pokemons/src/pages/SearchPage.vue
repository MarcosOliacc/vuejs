<script setup>
import { onMounted, onUnmounted, onUpdated, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import PokeGridSect from '@/components/PokeGrid/PokeGridSect.vue'
import { searchPokes,pokeData, removeSearch, pokeCount } from '@/data/searchPokes';

const route = useRoute()
onMounted(()=> {
  if(pokeCount < 1) {
    searchPokes(route.params.name)
  }
})
onUnmounted(removeSearch)



</script>
<template>
    <section class="conteiner">
      <h2>Pesquisando por "{{ route.params.name }}"</h2>
      <PokeGridSect :pokemons="pokeData.pokemons"/>
    </section>
</template>
<style scoped>
@import '@/styles/compStyles/searchStyles.scss';
</style>