<template>
    <pokemon-cards 
        :pokemons="starters" 
        @pokemonClicked="fetchEvolution" 
        :selectedId="selectedId"
    /> 
    <pokemon-cards :pokemons="evolutions"/> 
</template>

<script>
import Card from './Card.vue'
import PokemonCards from './PokemonCards.vue'
const api = 'https://pokeapi.co/api/v2/pokemon'
const STARTER_IDS = [1, 4, 7]

export default {
    data() {
        return {
            starters: [],
            evolutions: [],
            selectedId: null
        }
    },
    components: {
        Card,
        PokemonCards
    },

    async created() {
        const starters = await this.fetchData(STARTER_IDS)
        this.starters = starters
    },
    methods: {

        async fetchEvolution(pokemon) {
            this.selectedId = pokemon.id
            this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2])             
        },

        async fetchData(ids) {
            // const response = await window.fetch(`${api}/1`)
            // const data = await response.json()             
            const responses = await Promise.all(ids.map(id => window.fetch(`${api}/${id}`)))
            const data = await Promise.all(responses.map(res => res.json()))            
            return data.map(datum => ({
                id: datum.id,
                name: datum.name,
                sprite: datum.sprites.other['official-artwork'].front_default,
                types: datum.types.map(type => type.type.name)
            }))
            // const pokemon = {
            //     name: data.name,
            //     sprite: data.sprites.other['official-artwork'],
            //     types: data.types.map(type => ({ name: type.type.name }))
            // }

            // console.log(pokemon)
        }
    }
}
</script>

<style scoped>
    
</style>