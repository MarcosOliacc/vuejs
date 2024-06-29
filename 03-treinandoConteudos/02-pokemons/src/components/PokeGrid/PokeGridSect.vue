<script setup>
import PokeCard from '../common/pokeCard/PokeCard.vue'
defineProps(['pokemons'])
</script>
<template>
    <section class="conteiner">
        <div class="shadowBoxY">
            <div class="shadowBoxX">
                <div class="content">
                    <PokeCard :pokemons="pokemons"/>
                </div>
            </div>

        </div>
    </section>
</template>
<style scoped>
@import './styles.scss';
</style>