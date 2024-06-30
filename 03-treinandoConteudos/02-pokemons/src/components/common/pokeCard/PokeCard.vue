<script setup>
defineProps(['pokemons'])
</script>
<template>
        <div class="pokeCard" v-for="pokemon of pokemons" :key="pokemon.id">
            <div class="imgContent">
              
              <img class="pokeImg" v-if="pokemon.id < 10" v-bind:src="'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/00'+pokemon.id+'.png'" alt=""> 
              <img class="pokeImg" v-else-if="pokemon.id < 100" v-bind:src="'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/0'+pokemon.id+'.png'" alt=""> 
              <img class="pokeImg" v-else-if="pokemon.id >= 100" v-bind:src="'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/'+pokemon.id+'.png'" alt=""> 
            </div>
            
            <div class="descrip">
                <h3>{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1) }}</h3>
                <div class="infos">
                    <div class="dimensConteiner">
                        <p><img class="icon" src="/weight.svg" alt="skills">{{pokemon.weight}} </p>
                        <p><img class="icon" src="/height.svg" alt="skills">{{pokemon.height}} </p>
                        <p><img class="icon" src="/skills.svg" alt="skills">{{pokemon.abilities[0].ability.name}} </p>
                    </div>  
                    <div class="typesConteiner">
                        <p :class="typer.type.name" class="typeContent" v-for="typer of pokemon.types" :key="typer.slot">{{ typer.type.name }}</p>
                    </div>

                </div>
                
            </div>
        </div>
</template>
<style scoped>
@import './styles.scss';
</style>
