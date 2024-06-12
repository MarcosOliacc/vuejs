<script setup>
import {reactive, computed} from 'vue'
import Form from './components/FormSect.vue'
import ProfileSect from './components/ProfileSect.vue'
import RepoSect from './components/RepoSect.vue'
  const profile = reactive({
    login: '',
    name: '',
    bio:'',
    company:'',
    avatar_url:'',
    repos: []
  })

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
    const repos = await res.json()
    profile.repos = repos
}




</script>
<template>
	<h1>GitHub User Data</h1>
  <Form @formSubmit="fetchGithubUser" />
  <div v-if="profile.name.length > 0">
    <profileSect :profile="profile"/>
    
  </div>
  <section v-if="profile.repos.length > 0">
    <RepoSect :reposits="profile.repos"/>
  </section>
</template>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #1c1a1d;
  color: #e5e5e5;
}

#app {
  font-family: 'Ubuntu', sans-serif;
  min-height: 100vh;
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
}

img {
  border: 1px solid #e5e5e5;
  border-radius: 999px;
  display: block;
  margin: 1rem auto;
  width: 8rem;
  height: 8rem;
}

h1, h2 {
  color: #f64348;
  margin: 1rem auto .25rem;
}

h3 {
  margin: 1rem auto .25rem;
}

span{
  display: block;
  margin: 1rem auto;
}

input,
button {
  max-width: 20rem;
  padding: .5rem;
}

input {
  background-color: #1c1a1d;
  border: 1px solid #f64348;
  border-radius: .25rem;
  color: #e5e5e5;
  margin: 1rem 1rem 1rem 0;
}

button {
  background-color: #f64348;
  border: unset;
  border-radius: .25rem;
  color: #1c1a1d;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

button:hover {
  cursor: pointer;
  filter: brightness(0.95);
}

a {
  color: #f64348;
}
</style>

