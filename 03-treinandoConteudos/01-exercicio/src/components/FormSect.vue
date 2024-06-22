<script setup>
import { useSearchHistory } from '@/data/useSeachHistory';
import { ref } from 'vue'
//import { searchHistory } from '@/data/searchHistory';


const emit = defineEmits(['formSubmit', "update:modelValue"])
const searchInput = ref('')
function showHistory() {
  alert(`Histórico de pesquisa: \n ${searchHistory.users.join(`\n`)}`)
}
const searchHistory = useSearchHistory()

function handleSubmit(ev) {
    ev.preventDefault() 
    searchHistory.pushToHistory(searchInput.value)
    emit('formSubmit', searchInput.value)
    searchInput.value = ''
}

</script>
<template>
  
  <form @submit="handleSubmit">
    <input type="text" v-model="searchInput" @input="$emit('update:modelValue', $event.target.value)">
    <button type="submit">Carregar Usuário</button>
    <button type="button" @click="showHistory">ver historico</button>
  </form>
</template>