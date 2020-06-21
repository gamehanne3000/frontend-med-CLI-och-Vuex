<template>
    <div>
        <p></p>
        <input type="button" value=" Varsågod och klicka på min menings slösa knapp :) " 
        @click="clickOnMe" > Counter:   {{ counter }}   ||   default:   {{this.number}}
    </div>
</template>

<script>
// värt att påpeka är hur jag använder datan med antingen "mutation" eller "two-way computed property används". Men för att visa enbart användning av props skippa jag denna del även om det inte är best practise" 

export default {
  methods: {
    clickOnMe() {
      this.counter += 1;
    }
  },
  data() {
    return {
      counter: this.number // this. = för att komma åt prop
    };
  },
  props: {
    number: {   
      type: Number, // specifierar att det som kommer in av typen Number
      default: 0, // ifall ingen prop är inlagd vid anropet av komponenten, utgå från 0
      // required: true 
    }
  },
};
</script>