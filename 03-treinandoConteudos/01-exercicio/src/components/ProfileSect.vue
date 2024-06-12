<script setup>
    defineProps(['profile'])
</script>
<template>
    <img v-bind:src="profile.avatar_url">
    <strong>@{{ profile.login }}</strong>
    <h2>{{ profile.name }}</h2>
    <h3>{{ profile.company }}</h3>
    <span>{{ profile.bio }}</span>
    <h3>{{ profile.name }} tem {{ profile.repos.length }} repositorios Públicos:</h3>
</template>