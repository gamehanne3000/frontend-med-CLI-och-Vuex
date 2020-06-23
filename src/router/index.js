import Vue from 'vue'
import VueRouter from 'vue-router'
import Kanto from '../views/Kanto.vue'
import PokemonGO from '../views/pokemonGO.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'kanto',
    meta: {
      title: 'Kanto regionen'
    },
    component: Kanto 
  },
  {
    path: '/pokemonGO',
    name: 'pokemonGO',
    meta: {
      title: 'catched pokemons'
    },
    component: PokemonGO
  },
  { // tillåter mig själv att kunna lägga till en parameter på samma 
    // rutt eftersom den läser från samma komponent
    path: '/pokemonGO/:catchedPokes?',
    component: PokemonGO,
  }
]

const router = new VueRouter({
  routes
})

// "guard function" som i order hanteras asokronynt 
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next() // move on to the next hook in the pipeline. If no hooks are left, the navigation is confirmed.
})

export default router
