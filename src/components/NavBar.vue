<template>
  <header>
    <h1 class="logo"><router-link to="/">Luxury Rentals</router-link></h1>
    <nav>
      <ul>
        <li><router-link to="/villas" class="link">Villas</router-link></li>
        <li><router-link to="/about" class="link" >About us</router-link></li>
        <li><router-link to="/contact" class="link" >Contact</router-link></li>
        
      </ul>
      
    </nav>
    
  </header>
  <router-view/>
  
</template>

<script>
export default {
    name: 'NavBar',

}
</script>

<style>
    header {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-blend-mode: overlay;
  background: hsla(0, 0%, 1%, 0.2);
;
  padding: .6rem 0;
  text-transform: uppercase;

}
nav ul{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
nav ul li{
  list-style-type: none;
}
nav ul li a{
  text-decoration: none;
  font-family: Raleway;
  color: white;
  font-size: .8rem;
}
header h1{
font-size: 1rem;
font-weight: 500;
letter-spacing: 4px;
text-align: center;
color: white;
}

</style>