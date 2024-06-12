<script setup>
defineProps(['reposits'])

</script>
<template>
    <article v-for="repo of reposits" :key="repo.id">
        <h3> {{ repo.name }}</h3>
        <p>{{ repo.description }}</p>
        <a :href="repo.html_url" target="_blank">ver no github</a>
    </article>
</template>