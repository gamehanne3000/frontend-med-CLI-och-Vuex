
<template>
  <div>
    <img src="../assets/kantocelebration.jpg" alt="">
    <pokemon-go/>
    <mbutton/> <!-- default värde -->
    <mbutton :number="3"/> <!-- eget satt värde -->
  </div>
</template>

<script>
// integrera specifik komponent som sedan kan associeras med template
import pokGo from '@/components/component-Pokemon-Go.vue'
import meaningless from '@/components/prop.vue'

export default {
  components: {
    'pokemon-go': pokGo,
    'mbutton': meaningless
  }
}
</script>

<style scoped>
.img{
  margin: 20px;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.55);
}
</style>