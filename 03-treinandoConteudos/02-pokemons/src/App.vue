<script setup>
import { ref } from 'vue';
import Homepage from './pages/HomePage.vue'
import SearchForm from './components/common/searchForm/SearchForm.vue'
import { RouterLink, RouterView, } from 'vue-router'

const theme = ref('')

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
theme.value = prefersDarkScheme.matches ? 'dark' : 'light'

function changeTheme() {
  if(theme.value == 'light'){theme.value = 'dark'} else{theme.value = 'light'}
  console.log(theme.value)

}


</script>

<template>
  <div id="body" :class="theme">
    <div id="conteiner">
      <header class="header">
        <img class="pokeLogo" src="/pokeLogo.png" alt="PokemonLogo">
        <div class="searchContent">
          <SearchForm/>
        </div>
        <nav class="nav">
            <RouterLink class="routerContent" to="/">
              <a href="#">Home</a>
              <img  class="linkArrow icon" src="/rightArrow.svg" alt="rightArrow">
            </RouterLink>

            <RouterLink class="routerContent" to="/about">
              <a href="#">Sobre</a>
              <img  class="linkArrow icon" src="/rightArrow.svg" alt="rightArrow">
            </RouterLink>

            <a class="routerContent" href="">
              <a href="#">Repositório</a>
              <img  class="linkArrow icon" src="/rightArrow.svg" alt="rightArrow">
            </a>
          
          
          
          <button class="themeBtn" @click="changeTheme">tema</button>
        </nav>
      </header>
    
      <RouterView/>

    </div>
  </div>
</template>

<style scoped>
@import '@/styles/compStyles/appStyles.scss'
</style>