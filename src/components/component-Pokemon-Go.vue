<template>
    <div class="wrapper">
        <h3>How many pokemons have you catched in pokemon go ?! </h3>
        <input v-model.trim="searchedpokemon" placeholder="type here">
        <p>catches pokemons showned here: {{searchedpokemon}}</p>
    </div>
</template>

<script>
  export default {
    // (two way computed property)
    computed: {
        searchedpokemon: {
           get() {
            return this.$store.state.catched
           },
           set(value) {
               this.$store.commit('catch', value)
           }
        }
    },
    /* Servern kollar nu explicit efter ändringar i url m.h.a watch */
    watch: {
        searchedpokemon(q) { 
            this.$router.push({name: 'pokemonGO', query: { q } })
        }
    }
}
</script>

<style scoped>
.wrapper{
  background-color: grey;
  padding: 10px;
}
</style>