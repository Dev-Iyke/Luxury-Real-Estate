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
    /* border-right: 1px solid black; */
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
  }
  .specialties>div img{
    width: 22px;
    height: 22px;
  }
  .specialization .last-item{
    padding-right: 0;
    border-right: none;
    /* background-color: red; */
  }
  .specialties h3{
    font-weight: 600;
    margin-top: .6rem;
  }
  .specialties p{
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: .8rem;
    margin-top: .3rem;
    color: #5B656F;
    gap: .3rem;
  }
  
</style>