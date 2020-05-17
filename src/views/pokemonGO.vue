
<template>
  <div>
    <img class="img" src="../assets/kantocelebration.jpg" alt="">
    <pokemon-go/>
  </div>
</template>

<script>
// integrera specefik component som sedan kan associeras med template
import pokGo from '@/components/component-Pokemon-Go.vue'
export default {
  components: {
    'pokemon-go': pokGo
  }
}
</script>

<style scoped>
.img{
  margin: 20px;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.55);
}
</style>