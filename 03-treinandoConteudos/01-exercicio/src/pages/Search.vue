<script setup>
import {reactive, ref} from 'vue'
import Form from '../components/FormSect.vue'
import ProfileSect from '../components/ProfileSect.vue'
import RepoSect from '../components/RepoSect.vue'
  const profile = reactive({
    login: '',
    name: '',
    bio:'',
    company:'',
    avatar_url:'',
    repos: []
  })
  const inputValue = ref('')

async function fetchGithubUser(username) {
  profile.login = ''
    profile.name = ''
    profile.company = ''
    profile.bio = ''
    profile.avatar_url = ''
    profile.repos = ''
  const res = await fetch(`https://api.github.com/users/${username}`)
  const { login, name, bio, company, avatar_url } = await res.json()
  if(login) {
    profile.login = login
    profile.name = name
    profile.company = company
    profile.bio = bio
    profile.avatar_url = avatar_url
  
    await searchRepos(login)
  }
}
async function searchRepos(login) {
    const res = await fetch(`https://api.github.com/users/${login}/repos`)
    profile.repos = repos
}




</script>
<template>
	<h1>GitHub User Data</h1>
  <p>Pesquisando por <strong>"https://api.github/users/{{ inputValue }}"</strong></p>
  <Form @formSubmit="fetchGithubUser" v-model="inputValue" />
  <div v-if="profile.name.length > 0">
    <profileSect :profile="profile">
      <h2>pohra bicho</h2>
    <template v-slot:footer>
      <h1>aaaaaaaaaaaaaaaaaaaaa</h1>
    </template>
    

    </profileSect>
    
  </div>
  <section v-if="profile.repos.length > 0">
    <RepoSect :reposits="profile.repos">
      <h1>alooooooooooooo</h1>
    </RepoSect>
  </section>
</template>