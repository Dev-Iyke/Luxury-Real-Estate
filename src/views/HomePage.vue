<template>
  <div class="home">
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
      <div class="regions-bg">
        <div class="details">
          <h2>Mountains</h2>
          <p><span>87</span> properties</p>
        </div>   
      </div>
      <div class="regions-bg">
        <div class="details">
          <h2>Coastline</h2>
          <p><span>64</span> properties</p>
        </div>  
      </div>
    </div>
  </div>

  <div class="specialization">
    <h2>Our properties specialties</h2>
    <div class="spe">
      <Specialties :specialty="specialties"/>
    </div>
  </div>

  <div class="host">
    <div>
      <p>BECOME A HOST</p>
      <h2>Become a host</h2>
      <p>Join the elite league of  hosts specializing in luxury villas and unlock a world of exclusive opportunities.</p>
      <button class="join">JOIN TODAY</button>
    </div>
  </div>

  <div class="about">
    <AboutUs />
  </div>

  <div class="footer">
    <Contact />
    <FooterBtm />
  </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Filter from '../components/Filter.vue'
import VillaCards from '../components/VillaCards.vue'
import Specialties from '../components/Specialties.vue'
import AboutUs from '../components/AboutUs.vue'
import FooterBtm from '../components/FooterBtm.vue'
import Contact from '../components/Contact.vue'

import {ref} from 'vue'
export default {
  name: "HomePage",
    components: {NavBar, Filter, VillaCards, Specialties, AboutUs, FooterBtm, Contact},
    setup(){
      const villas = ref([
      {price: "£280 / daily", country: "US", site: "seaside", title: "venice", guests: 2, bedrooms: 4, land: 420, bathrooms:3, id: 1},
      {price: "3280 / daily", country: "US", site: "roadside", title: "lagos", guests: 2, bedrooms: 4, land: 420, bathrooms:3, id: 2},
      {price: "4280 / daily", country: "US", site: "hillside", title: "abuja", guests: 2, bedrooms: 4, land: 420, bathrooms:3, id: 3}
      ])

      const specialties = ref([
        {speImage: require('../assets/specialties-files/sea.png'), type: "Sea Front", benefit: "have a look", id: 1},
        {speImage: require('../assets/specialties-files/pet.png'), type: "Pet Friendly", benefit: "pets allowed", id: 2},
        {speImage: require('../assets/specialties-files/electric-car.png'), type: "Electric Car", benefit: "charge your car", id: 3},
        {speImage: require('../assets/specialties-files/gym.png'), type: "Fitness/Gym", benefit: "work out", id: 4},
        {speImage: require('../assets/specialties-files/boat.png'), type: "Boat mooring", benefit: "take a trip", id: 5}
      ])

      return {villas:villas, specialties:specialties}
    }
}
</script>

<style scoped>

.home{
  background-color: #f5f3f1;
  color: black;
}

/****HERO SECTION */
  .hero{
    height: 107vh;
    background-image: url('../assets/home1.png');
    background-blend-mode: multiply;
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
    font-family: "Rufina", sans-serif
  }
  .hero-info span{
    background: hsla(0, 0%, 100%, 0.94);
    padding: .5rem 1.5rem;
    color: #C9BDAB;
    font-weight: 500;
    border-radius: 0 5px 5px 5px;
    letter-spacing: 2px;
    font-family: "Raleway", sans-serif;
  }
  
/******* TOP PICK SECTION */
  .top-pick{
    padding: 5.5rem 0;
    display: flex;
    flex-direction: column;
  }
  .top-pick-info{
    text-align: center;
    color: black;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 3rem;
  }
  .top-pick-info h2{
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    font-family: "Rufina", sans-serif;
  }
  .top-pick-info p{
    font-size: .8rem;
    font-weight: 500;
  font-family: "Raleway", sans-serif;
  }
  .all-cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 75%;
    margin: 0 auto;
    }

/******** REGION SECTION */
  .regions{
    font-family: "Raleway", sans-serif;
    background-color: #C9BDAB;
    padding: 3.5rem 0 6rem;
    border-radius: 0px 1px 80px 10px;
  }
  .regions-info{
    width: 40%;
    margin: 0 auto;
    text-align: center;
  }
  .regions-info h2{
    font-size: 2.6rem;
    color: #181D24;
    font-family: "Rufina", sans-serif
  }
  .regions-info p{
    font-size: .8rem;
    margin: .8rem 0
  }
  .regions-imgs{
    width: 70%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .7rem;
  }
  .regions-bg{
    width: 100%;
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .regions-imgs>div:nth-of-type(1){
    background-image: url('../assets/region-files/mountains.png');
    border-radius: 5px 40px 5px 40px;
  }
  .regions-imgs>div:nth-of-type(2){
    background-image: url('../assets/region-files/coastline.png');
    border-radius: 40px 5px 40px 5px;
  }
  .regions-bg .details{
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 10%;
    left: 20px;
    color: white;
  }
  .regions-bg .details h2{
    font-size: 2.5rem;
    font-weight: 500;
    font-family: "Rufina", sans-serif
  }
  .regions-bg .details span{
    font-weight: bold;
  }
  .regions-bg .details p{
    font-weight: 200;
    font-size: .85rem;
  }

/*******SPECIALIZATION SECTION */
  .specialization{
    padding: 7.5rem 0;
  }
  .specialization h2{
    font-size: 2rem;
    margin-bottom: 3rem;
    text-align: center;
    font-family: "Rufina", sans-serif
  }
  .spe{
      width: 75%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
    
  
/******** HOST SECTION */
.host{
    background-image: url('../assets/host-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 6rem 0;
    margin: 3rem 0;
    border-radius: 0px 10px 80px 10px;
    font-family: "Raleway", sans-serif;
  }
  .host div{
    width: 32%;
    margin: 0 auto;
    color: #181D24;
    background-color: hsla(0, 0%, 100%, 0.88);
    border-radius: 40px 4px 40px 4px;
    padding: 4rem 3rem;
    text-align: center
  }
  .host h2{
    font-size: 2.2rem;
    font-weight: 700;
    margin: .3rem 0 2rem;
    font-family: "Rufina", sans-serif
  }
  .host p{
    font-size: .7rem;
    font-weight: 500
  }
  .host button{
    margin-top: 1.3rem;
    background-color: #5B656F;
    width: 100%;
    color: #eee;
    padding: .75rem 0;
    border: none;
    border-radius: 0px 10px 10px 10px;
  }

</style>