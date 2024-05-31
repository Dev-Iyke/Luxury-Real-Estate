<template>
  <div class="hero">
    <NavBar/>
    <h1>Luxury</h1>
  </div> 
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  name: "HomePage",
    components: {NavBar},
}
</script>

<style>
  .hero{
    height: 70vh;
    background: url('../assets/home1.png')
  }
</style>