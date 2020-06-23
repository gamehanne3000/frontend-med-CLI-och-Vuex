<template>
    <div class="wrapper">
        <h3>How many pokemons have you catched in pokemon go ?! </h3>
        <input v-model.trim="searchedpokemon" placeholder="type here">
        
        <!-- 
            Denna tag LÄSER av ett värde mha params och inte som vid router.push där jag SKRIVER ett värde, läs nedan i watch.
            Det betyder att jag få samma funktionalitet men att jag skriver på 2 lite olika sätt!
        -->
        <p v-if="$route.params.catchedPokes != null"> catches pokemons showned here: {{$route.params.catchedPokes}}</p>
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
        /* Servern kollar nu explicit efter ändringar i url m.h.a watch = SKRIVER ett värde */
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