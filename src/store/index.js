import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    image_default: null,
    image_shiny: null,
    name: null,
    id: null,
    weight: null,
    base_experience: null,
    type: null,
    catched: '',
  },
  mutations: {
    setPicDefault(state, PicDefault) {
      state.image_default = PicDefault
    },
    setPicShiny(state, PicShiny) {
      state.image_shiny = PicShiny
    },
    setName(state, Pname) {
      state.name = Pname
    },
    setId(state, Pid) {
      state.id = Pid
    },
    setWeight(state, Pweight) {
      state.weight = Pweight
    },
    setXP(state, XP) {
      state.base_experience = XP
    },
    setType(state, type) {
      state.type = type
    },
    catch(state, pokemons) {
          state.catched = pokemons
    }
  },
  actions: {
    fetchpokemon() {
      let kantoRegionen = 151
      let pokIndex = Math.floor(Math.random() * kantoRegionen)
      var urlForListOfPokemon = ('https://pokeapi.co/api/v2/pokemon/' + pokIndex)

      fetch(urlForListOfPokemon, {   
          method: 'GET', 
          headers: {
              'Content-Type': 'application/JSON'
          },
      })
      . then(response => response.json())
      . then(result => {
        this.commit('setPicDefault', result.sprites['front_default'])
        this.commit('setPicShiny', result.sprites['front_shiny'])
        this.commit('setName', result.name)
        this.commit('setId', result.id)
        this.commit('setWeight', result.weight)
        this.commit('setXP', result.base_experience)
        this.commit('setType', result.types.map((type) => type.type.name).join(', '))
      });
    }
  }
})
