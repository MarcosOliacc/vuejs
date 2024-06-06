

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
async function fetchGithubUser() {
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
