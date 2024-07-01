<script setup>
    import PokeGridSect from '@/components/PokeGrid/PokeGridSect.vue';
    import WhoIsSect from '@/components/WhoIsSect/WhoIsSect.vue';
    import { onMounted, reactive } from 'vue';

    const pokeData = reactive({
        pokemonsUrls:[],
        pokemons: []
    })
    async function getPokemons() {
        for(const url of pokeData.pokemonsUrls) {
            const res = await fetch(url)
            const data = await res.json()
            pokeData.pokemons.push(data)
        }
    }
    async function fetchPokeUrls() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0"')
        await res.json().then(res=>{
            res.results.forEach(element => {
                pokeData.pokemonsUrls.push(element.url)
            });
            
            getPokemons()
        })
    }
    onMounted(fetchPokeUrls)
    
</script>
<template>
    <div class="conteiner">
        <WhoIsSect/>
        <PokeGridSect :pokemons="pokeData.pokemons"/>

    </div>
    
</template>