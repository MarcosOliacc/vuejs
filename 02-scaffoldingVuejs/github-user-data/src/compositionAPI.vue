<script setup>

    import { reactive } from 'vue'
    const state = reactive({
        login: '',
        name: '',
        bio: '',
        company: '',
        avatar_url: '',
        repos: [],
        searchInput: ''
    })
    async function fetchGithubUser(ev) {
      ev.preventDefault()
      const res = await fetch(`https://api.github.com/users/${state.searchInput}`)
      const { login, name, bio, company, avatar_url } = await res.json()
      if(login) {
        state.login = login
        state.name = name
        state.bio = bio
        state.company = company
        state.avatar_url = avatar_url
        console.log(login)
        fetchUserRepositories(login)
      }
    }
    async function fetchUserRepositories(user) {
      const res = await fetch(`https://api.github.com/users/${user}/repos`)
      const repos = await res.json()
      state.repos = repos
    }
</script>
<template>
	<h1>GitHub User Data</h1>
  <form @submit="fetchGithubUser">
    <input type="text" v-model="state.searchInput">
    <button type="submit">Carregar Usuário</button>
  </form>
  <div v-if="state.login !== ''">
    <img v-bind:src="state.avatar_url">
    <strong>@{{ state.login }}</strong>
    <h2>{{ state.name }}</h2>
    <h3>{{ state.company }}</h3>
    <span>{{ state.bio }}</span>
  </div>
  <section v-if="state.repos.length > 0">
    <article v-for="repo of state.repos" :key="repo.id">
      <h2>{{ repo.name }}</h2>
      <p>{{ repo.description }}</p>
      <a :href="repo.html_url" target="_blank">ir para o site</a>
    </article>

  </section>
</template>
<style scoped>
  @import './assets/composition.css';
</style>