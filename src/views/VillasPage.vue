<template>
  <div>
    <NavBar/>
    <h1>Villas</h1>
    <div class="all-cards">
      <VillaCards :villas="villas" />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import VillaCards from '../components/VillaCards.vue'

import {ref} from 'vue'
export default {
  name: "VillasPage",
  components: {NavBar, VillaCards},

  setup(){
    const villas = ref([
      {price: "£280 / daily", country: "US", site: "seaside", title: "venice", guests: 2, bedrooms: 4, land: 420, bathrooms:3, id: 1},
      {price: "3280 / daily", country: "US", site: "roadside", title: "lagos", guests: 2, bedrooms: 4, land: 420, bathrooms:3, id: 2},
      {price: "4280 / daily", country: "US", site: "hillside", title: "abuja", guests: 2, bedrooms: 4, land: 420, bathrooms:3, id: 3}
    ])

    return {villas:villas}
  }
}
</script>

<style>
  .all-cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 75%;
    margin: 0 auto;
        
    }
</style>