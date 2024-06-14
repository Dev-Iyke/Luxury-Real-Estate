<template>  
  <div class="about-us">
    <h1>About Us</h1>
    <div class="about-flex">
        <div class="about-info">
            <div class="about-p">
                <p>Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. </p>
                <p>Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.</p>
                <p>Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor feugiat. Sed quis sem elementum, viverra ligula at, lobortis magna. Praesent congue nibh in dolor rutrum, et euismod quam elementum.</p>
                <p>Mauris justo felis, iaculis quis sagittis sit amet, feugiat vitae est. Aliquam porta ex elit, sit amet rutrum turpis egestas viverra. Quisque at libero purus.</p>
            </div>
            <p>We strive to offer you best possible homes to stay.  </p>
        </div>
        <div class="about-imgs">
        <img src="../assets/about-tgp.png" alt="">
        </div>
    </div>
</div>
</template>

<script>
export default {
name: "AboutUs"
}
</script>

<style scoped>
.about-us{
    background-color: #f4f1ed;
    width: 75%;
    margin: 0 auto;
    margin-top: 10rem;
    margin-bottom: 6rem;
    font-family: 'Raleway', sans-serif;
}
.about-us h1{
    font-size: 2.5rem;
    font-weight: 600;
}
 .about-flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
  }
  .about-info{
    width: 52%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
  }
  .about-p{
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 75%;
    font-size: .8rem;
    line-height: 1.2rem;
    font-weight: 600;
  }
  .about-info>p{
    margin-top: 2.5rem;
    padding: 1.2rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    background-color: #DFE3E7;
  }
  .about-imgs{
    position: relative;
    background-image: url('../assets/about-btm.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom left;
    width: 42%;
    height: 430px;
    border-top-right-radius: 30px;
  }
  .about-imgs img{
    width: 250px;
    height: 350px;
    position: absolute;
    bottom: 160px;
    left: -100px;
  }

</style>