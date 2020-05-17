<template>
  <div>
    <img class="img" src="../assets/Kanto-header.jpg" alt="Kanto welcome header">
    <kanto-region title="Here you can look trough all the pokemons in Kanto region"/>
  </div>
</template>

<script>
// integrera specefik component som sedan kan associeras med template
import Kanto from '@/components/component-Kanto.vue'
export default {
  components: {
    'kanto-region': Kanto
  }
}
</script>

<style scoped>
.img{
  margin: 20px;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.55);
}
</style>