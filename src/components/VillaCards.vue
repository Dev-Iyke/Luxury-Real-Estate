<template>
<div v-for="villa in villas" :key="villa.id">
  <div class="villa-card">
    <div class="img">
        <div class="info">
            <p> From <span>{{ villa.price }}</span></p>
            <div class="fav"><img src="../assets/villa-files/Fav.png" alt="fav"></div>
        </div>
    </div>
    <div class="location">
        <span><!-- Italy -->{{ villa.country }}</span>
        <span><img src="../assets/villa-files/Ellipse.png" alt=""></span>
        <span><!-- Mountains -->{{ villa.site }}</span>
    </div>
    <h2><!-- Villa Makarska -->{{ villa.title }}</h2>
    <div class="details">
        <div>
            <img src="../assets/villa-files/people.png" alt="guests">
            <span><!-- 8 guests -->{{ villa.guests }}</span>
            <span>guests</span>
        </div>
        <div>
            <img src="../assets/villa-files/single-bed.png" alt="bedrooms">
            <span><!-- 8 bedrooms -->{{ villa.bedrooms }}</span>
            <span>bedrooms</span>
        </div>
        <div>
            <img src="../assets/villa-files/blueprint.png" alt="land">
            <span><!-- 460 m<sup>2</sup> -->{{ villa.land }}</span>
            <span>m<sup>2</sup></span>
        </div>
        <div>
            <img src="../assets/villa-files/bath-tub.png" alt="bathrooms">
            <span><!-- 4 bathrooms -->{{ villa.bathrooms }}</span>
            <span>bathrooms</span>
        </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
    name: 'VillaCards',
    props: ['villas'],

    setup(props) {
        console.log(props)

    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    
    .villa-card{
        background-color: #fff;
        width: 300px;
        margin: .7rem;
        border-radius: 8px 8px 30px 8px;
        font-family: "Raleway", sans-serif;
    }
    .villa-card .img{
        height: 250px;
        background-image: url(../assets/villa-files/Rectangle.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top right;
        border-radius: 8px 8px 0 0;
    }
    .villa-card .img .info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem 0 0 1rem;
    }
    .villa-card .img .info p{
        background-color: #F5E9D6;
        border-radius: 4px 4px 20px 4px;
        border-bottom: 4px solid #918675;
        padding: 5px;
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
    }
    .villa-card .img .info span{
        font-weight: bold;
    }
    /***** Location section */
    .location{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: .6rem;
        padding: .4rem 1rem;
    }
    .location span:nth-of-type(1){
        font-weight: 600;
        font-size: .8rem;
    }
    .location span:nth-of-type(3){
        font-size: .7rem;
    }
    .villa-card h2{
        font-size: 1.5rem;
        text-transform: capitalize;
        font-weight: 500;
        margin-bottom: .2rem;
        padding: 0 1rem;
    }
    /***** Details section */
    .details{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: .7rem;
        padding: .2rem 1rem 1rem;
        
    }
    .details>div{
        display: flex;
        align-content: center;
        /* justify-content: flex-start; */
        gap: .3rem;
    }

    .details span:nth-of-type(1){
        font-size: .8rem;
        font-weight: 800;
    }
    .details span:nth-of-type(2){
        font-size: .8rem;
        font-weight: 500;
    }
    
</style>