<script setup>
import { reactive, ref } from 'vue';
import PokeCard from '../common/pokeCard/PokeCard.vue'
import { pokeCount, pokeData } from '@/data/searchPokes';
const pageNum = ref(1)
const pageEnd = ref(pageNum.value * 10)
const pageInit = ref(pageEnd.value - 10)
console.log(pokeData)
const pagePokes = pokeData.pokemons.slice(pageInit.value, pageEnd.value)
console.log(pagePokes)
function prevPage() {
    pageNum.value -= 1
}
function nextPage() {
    if(pageEnd.value < pokeCount.value) {
        pageNum.value += 1
    }
}
</script>
<template>
    <section class="conteiner">
        <div class="shadowBoxY">
            <div class="shadowBoxX">
                <div v-if="pokeData.pokemons.length > 0" class="content">
                    <PokeCard :pokemons="pagePokes"/>
                </div>
                <div class="paginationContent">
                    <button
                        @:click="prevPage"
                    class="prevBtn">{{ pageNum - 3 }}</button>
                    <button
                        @:click="prevPage"
                    class="prevBtn">{{ pageNum - 2 }}</button>
                    <button
                        @:click="prevPage"
                    class="prevBtn">{{ pageNum - 1 }}</button>
                    <h2>Pagina {{ pageNum }}</h2>
                    <button
                        @:click="nextPage"
                    class="nextBtn">{{ pageNum + 1 }}</button>
                    <button
                        @:click="nextPage"
                    class="nextBtn">{{ pageNum + 2 }}</button>
                    <button
                        @:click="nextPage"
                    class="nextBtn">{{ pageNum + 3 }}</button>
                </div>
            </div>

        </div>
    </section>
</template>
<style scoped>
@import './styles.scss';
</style>