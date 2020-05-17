<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
    <div>
        <ol id="wrapperForPokemonInfo">           
            <input id="generatePokBtn" type="button" @click="$store.dispatch('fetchpokemon')" value="fetch">
            <p id="name"> Name: {{$store.state.name}}</p>
            <img :src="$store.state.image_default" alt="Picture -> not shiny ||" > 
            <img :src="$store.state.image_shiny" alt=" Picture -> shiny" >
            <p id="pokId">Id: {{$store.state.id}}</p>
            <p id="base-experience">XP: {{$store.state.base_experience}}</p>
            <p id="type">Type: {{$store.state.type}}</p>
            <p id="weight">Weight: {{$store.state.weight}}</p>
        </ol>
    </div>
  </div>
</template>

<script>
/* Tillåt en prop av typen string */
export default {
  props: {
    title: String
  }
}
</script>

<!-- Att lägga till "scoped" påverkar enbart denna komponent CSS -->
<style scoped>
#generatePokBtn {
   background-color: #E5CE37;
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    padding: 10px 25px;
    font-size: large;
    display: flex;
    margin: auto;
}
#wrapperForPokemonInfo {
  margin-bottom: 50px;
}
#generatePokBtn :hover {
  padding: 15px 30px;
  background-color: aqua;
}
</style>
