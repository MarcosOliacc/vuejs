<script setup>
import { reactive, ref } from 'vue';

const searchInput = ref('')

const state = reactive ({
    login: 'johndoe',
    name: 'John Doe',
    bio: '...',
    company: 'Acme Inc.',
    avatar_url: 'https://unsplash.it/256'
})
async function fetchGithubUser(ev) {
    ev.preventDefault()
    const res = await fetch(`https://api.github.com/users/${searchInput.value}`)
    const { login, name, bio, company, avatar_url } = await res.json()

    state.login = login
    state.name = name
    state.bio = bio
    state.company = company
    state.avatar_url = avatar_url
}

</script>
<template>
    <h2>GitHub User Data</h2>
    <form @submit="fetchGithubUser">
        <input type="text" v-model.lazy="searchInput">
        <button>Carregar Usuário</button>
    </form>
    <img :src="state.avatar_url">
    <strong>@{{ state.login }}</strong>
    <h1>{{ state.name }}</h1>
    <h2>{{ state.company }}</h2>
    <span>{{ state.bio }}</span>
</template>