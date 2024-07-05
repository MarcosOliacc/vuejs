<script setup>
import { onMounted, reactive, ref } from 'vue'; 

const pokedata = reactive({pokemon: {}})
const divActived = ref('form')
const response = ref('')
const loading = ref(false)

async function fetchOnePokemon() {
    loading.value = true
    const number = parseInt(Math.random()* 1025).toString().padStart(3,'0')
    
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
        const data = await res.json();
        pokedata.pokemon = data;
    } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
    } finally {
        loading.value = false;
    }
}

function tryAgain() {
    divActived.value = 'form'
    response.value = ''
}
function again() {
    fetchOnePokemon()

    divActived.value = 'form'
    response.value = ''
}
async function handleSubmit(ev) {
    ev.preventDefault()
    if (response.value.trim() != '') {
        if(response.value.toLocaleLowerCase() === pokedata.pokemon.name.toLocaleLowerCase) {
            alert('parabens! você acertou.')
            divActived.value = 'trueDiv'
        } else {
            alert('errou')
            divActived.value = 'falseDiv'
        }
    } else {
        alert('Digite algum nome para enviar a resposta : ) ')
    }
}
onMounted(fetchOnePokemon)

</script>
<template>
    <section class="conteiner">
        <div class="podiumContent">
            <div v-if="divActived == 'form'&& !loading" class="off">
                <div class="shadowBoxX">
                    <div class="shadowBoxY">
                        <img class="pokeImg" v-bind:src="'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/'+pokedata.pokemon.id+'.png'" alt="">
                    </div>
                </div>
            </div>
            <div v-else-if="loading">
                <div class="off">
                <div class="shadowBoxX">
                    <div class="shadowBoxY">
                        <p>carregando...</p>
                    </div>
                </div>
            </div>
                
            </div>
            <div v-else class="on">
                <div class="shadowBoxX">
                    <div class="shadowBoxY">
                        <img class="pokeImg" v-bind:src="'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/'+pokedata.pokemon.id+'.png'" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div v-if="divActived == 'form'" class="formConetiner">
            <form @submit="handleSubmit" action="#" class="defConteiner">
                <h3>Quem é esse pokémon?</h3>
                <p>Dica: começa com: '{{pokedata.pokemon.name}}' kkk</p>
                <div>
                    <input type="text" placeholder="Nome do Pokémon" v-model="response">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
        <div v-else-if="divActived == 'trueDiv'" class="falseResConteiner">
            <h1>acertou</h1>
            <button @click="again">Tente novamente!</button>
        </div>
        <div v-else-if="divActived == 'falseDiv'" class="defConteiner">
            <h3>Que pena, parece que você errou! </h3>
            <p>O nome correto é: {{pokedata.pokemon.name}}</p>
            <button @click="tryAgain">Tente novamente!</button>
        </div>
    </section>
</template>
<style scoped>
@import './styles.scss';
</style>