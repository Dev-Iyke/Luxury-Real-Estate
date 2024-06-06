<template>
  <div class="hero">
    <NavBar/>
    <div class="hero-info">
      <h1>BE OUR GUEST</h1>
      <span>LIVE LIKE A KING IN OUR BEST HOUSES</span>
    </div>
    <Filter/>
  </div> 

  <div class="top-pick">
    <div class="info">
      <h2>Top Pick Villas</h2>
      <p>Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.</p>
    </div>
    <div class="all-cards">
      <VillaCards :villas="villas"/>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Filter from '../components/Filter.vue'
import VillaCards from '../components/VillaCards.vue'

import {ref} from 'vue'
export default {
  name: "HomePage",
    components: {NavBar, Filter, VillaCards},
    setup(){
      const villas = ref([
      {price: "From £280 / daily", country: "US", site: "seaside", title: "venice", guests: 2, bedrooms: 4, land: 420, bathrooms:3, id: 1},
      {price: "From 3280 / daily", country: "US", site: "roadside", title: "lagos", guests: 2, bedrooms: 4, land: 420, bathrooms:3, id: 2},
      {price: "From 4280 / daily", country: "US", site: "hillside", title: "abuja", guests: 2, bedrooms: 4, land: 420, bathrooms:3, id: 3}
      ])

      return {villas:villas}
    }
}
</script>

<style>

  .hero{
    height: 107vh;
    background-image: url('../assets/home1.png');
    background-blend-mode: multiply;
    background-color: #e1e1e1;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .hero-info{
    text-align: center;
    margin: 9rem 0 6rem;
  }
  .hero-info h1{
    color: white;
    font-size: 3.7rem;
    font-weight: 500;
    margin-bottom: 1rem;
    font-family: Rufina;
  }
  .hero-info span{
    background: hsla(0, 0%, 100%, 0.94);
    padding: .5rem 1.5rem;
    color: #C9BDAB;
    font-weight: 500;
    border-radius: 0 5px 5px 5px;
    letter-spacing: 2px;
  }
  

  .top-pick{
    background-color: #e1e1e1;
    padding: 3rem 0;
  }
  .all-cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 75%;
    margin: 0 auto;
    }
</style>