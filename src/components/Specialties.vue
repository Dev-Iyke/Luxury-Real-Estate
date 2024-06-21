<template>
  <div v-for="spe in specialty" :key="spe.id" :class="{ 'last-item': spe.id === specialty.length }">
  <div class="specialties">
    <div><img :src="spe.speImage" alt="logo"></div>
    <h3>{{ spe.type }}</h3>
    <p>
        <span>{{ spe.benefit }}</span>
        <span><img src="../assets/specialties-files/arrow.png" alt="arrow"></span>
    </p>
  </div>
</div>
</template>

<script>

export default {
  name: "Specialties",
  props: ['specialty']
}
</script>

<style scoped>
  .specialties{
    border-right: 1px solid #C9BDAB;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    font-family: "Rufina", sans-serif
  }
  .specialties>div img{
    width: 22px;
    height: 22px;
  }
  .last-item .specialties{
    padding-right: 0;
    border-right: none;
  }
  .specialties h3{
    font-weight: 600;
    margin-top: .6rem;
  }
  .specialties p{
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: .6rem;
    font-weight: 600;
    margin-top: .3rem;
    color: #5B656F;
    gap: .3rem;
    font-family: "Raleway", sans-serif
  }
  
</style>