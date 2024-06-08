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
    <div class="top-pick-info">
      <h2>Top Pick Villas</h2>
      <p>Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.</p>
    </div>
    <div class="all-cards">
      <VillaCards :villas="villas"/>
    </div>
  </div>

  <div class="regions">
    <div class="regions-info">
      <h2>OUR REGIONS</h2>
      <p>Fusce blandit magna eget felis dapibus, ac lacinia quam faucibus. Quisque feugiat felis a quam volutpat, non scelerisque nibh scelerisque.</p>
    </div>
    <div class="regions-imgs">
      <div>
        <h2>Mountains</h2>
        <p><span>87</span> properties</p>
      </div>
      <div>
        <h2>Coastline</h2>
        <p><span>64</span> properties</p>
      </div>
    </div>
  </div>

  <div class="specialization">
    <h2>Our properties specialties</h2>
    <div class="spe">
      <Specialties />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Filter from '../components/Filter.vue'
import VillaCards from '../components/VillaCards.vue'
import Specialties from '../components/Specialties.vue'

import {ref} from 'vue'
export default {
  name: "HomePage",
    components: {NavBar, Filter, VillaCards, Specialties},
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
  
/******* TOP PICK SECTION */
  .top-pick{
    background-color: #e1e1e1;
    padding: 5.5rem 0;
    display: flex;
    flex-direction: column;
  }
  .top-pick-info{
    text-align: center;
    color: #333;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 3rem;
  }
  .top-pick-info h2{
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  .top-pick-info p{
    font-size: .8rem;
    font-weight: 500;
  /*   margin-bottom: 1rem; */
  }
  .all-cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 75%;
    margin: 0 auto;
    }

    /******** REGION SECTION */

</style>