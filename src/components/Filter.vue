<template>
  <div class="filter">
      <div class="opt">
        <select name="location" id="location">
          <option value="null" class="def">Location</option>
          <option value="seaside">Seaside</option>
          <option value="countrySide">Countryside</option>
          <option value="village">Village</option>
          <option value="mountains">Mountains</option>
        </select>  
      </div>
      <div class="opt">
        <select name="location" id="location">
          <option value="miami">Miami</option>
        </select>  
      </div>
      <div class="opt">
        <select name="location" id="location">
          <option value="miami">Miami</option>
        </select>  
      </div>
      <div class="opt">
        <select name="location" id="location">
          <option value="miami">Miami</option>
        </select>  
      </div>
      <div class="btn">
        <button @click="filterVillas">Search</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Filter',
    setup(){
        const filterVillas = (location, dates, guests, price ) => {
            let loc = document.getElementById('location')
            console.log(loc.value)
        }

        return {filterVillas: filterVillas}
    }

}
</script>

<style scoped>
    .filter{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    padding: .5rem .3rem .3rem 0;
    border-bottom: 5px solid hsla(36, 22%, 73%, 1);
    box-shadow: 0px 20px 0px 0px hsla(215, 20%, 12%, 0.72);
    width: 60%;
    margin: 0 auto;
    font-family: "Raleway", sans-serif;
  }
  .opt{
    padding: 0 1rem 0 .5rem;
    border-right: 1px solid #cbcbcb;
  }
  .opt select, .btn button{
    border: none; 
    padding: .6rem 3.5rem .6rem 0;
    font-size: 1rem;
    font-weight: 300;
    outline: none;
  }
  .btn button{
    padding: 1rem;
    border-radius: 0 10px 10px 10px;
    background-color: hsla(209, 10%, 39%, 1);
    color: white;
  }
</style>