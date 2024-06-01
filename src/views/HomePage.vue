<template>
  <div class="hero">
    <NavBar/>
    <div class="hero-info">
      <h1>BE OUR GUEST</h1>
      <span>LIVE LIKE A KING IN OUR BEST HOUSES</span>
    </div>
    <Filter/>
  </div> 
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Filter from '../components/Filter.vue'
export default {
  name: "HomePage",
    components: {NavBar, Filter},
}
</script>

<style>
  .hero{
    height: 100vh;
    background-image: url('../assets/home1.png');
    background-blend-mode: multiply;
    background-color: #c4c4c4;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .hero-info{
    text-align: center;
    margin: 10rem 0 6rem;
  }
  .hero-info h1{
    color: white;
    font-size: 3.2rem;
    margin-bottom: 1rem;
    font-family: Rufina;
  }
  .hero-info span{
    background: hsla(0, 0%, 100%, 0.94);
    padding: .7rem 1.4rem;
    color: #C9BDAB;
    font-weight: 500;
    border-radius: 0 10px 10px 10px;
  }
  
</style>