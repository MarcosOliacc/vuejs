<script setup>
import { ref } from 'vue'

const emit = defineEmits(['formSubmit'])
const searchInput = ref('')

function handleSubmit(ev) {
    ev.preventDefault() 
    emit('formSubmit', searchInput.value)
    searchInput.value = ''
}

</script>
<template>
  <p>Pesquisando por <strong>"https://api.github/users/{{ searchInput }}"</strong></p>
  <form @submit="handleSubmit">
    <input type="text" v-model="searchInput">
    <button type="submit">Carregar Usuário</button>
  </form>
</template>