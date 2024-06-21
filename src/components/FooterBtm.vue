<template>
  <div class="footer-cont">
    <div class="cont">
    <div class="left">
      <h3>LUXURY RENTALS</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sint illum, nulla ullam esse veniam adipisci commodi facere inventore magnam.</p>
      <div>
        <span><a href="#">Terms & Conditions</a></span>
        <span><a href="#">Privacy Notice and Cookies</a></span>
        <span><a href="#">Imprint</a></span>
      </div>
    </div>
    <div class="right">
      <h3>Connect with us</h3>
      <p><a href="tel:+2349030997226">+234 903 0997 226</a></p>
      <p><a href="mailto:obasiikechukwu761@gmail.com">info@luxuryrentals.com</a></p>
      <div class="links">
        <a href="#"><img src="../assets/footer-imgs/link-3.png" alt="links"></a>
        <a href="#"><img src="../assets/footer-imgs/link-1.png" alt="links"></a>
        <a href="#"><img src="../assets/footer-imgs/link-5.png" alt="links"></a>
        <a href="#"><img src="../assets/footer-imgs/link-4.png" alt="links"></a>
        <a href="#"><img src="../assets/footer-imgs/link-2.png" alt="links"></a>
      </div>
      <p>Luxury rentals. | &copy; All rights reserved 2023-2024</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBtm'

}
</script>

<style>
 .footer-cont{
  background-color:#DFE3E7;
  padding: 12rem 0 5rem;
  font-family: "Raleway", sans-serif;
 }
  .footer-cont .cont{
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
  }
  
  .footer-cont .cont .left{
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
 
  }
  .footer-cont .cont .left>h3{
    font-weight: 500;
    font-size: 1rem;
  }
  .footer-cont .cont .left>p{
    font-weight: 400;
    font-size: .8rem;
    color: #5B656F;
  }
  .footer-cont .cont .left>div{
    margin-top: 1.5rem;
    font-size: .7rem;
    display: flex;
    gap: 1.4rem;
  }
  .footer-cont .cont .right{
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: .5rem;

  }
  .footer .links{
    display: flex;
    gap: .6rem;
  }
  .footer .links img{
    width: 15px;
    height: 15px;
  }
  .footer-cont .cont .right h3{
    font-weight: 700;
    font-size: .9rem;
  }
  .footer-cont .cont .right a{
    font-weight: 500;
    font-size: .8rem;
  }
  .footer-cont .cont .right p:last-of-type{
    font-weight: 400;
    font-size: .7rem;
    margin-top: 1rem;
  }
  .footer-cont a{
    color: #000;
    text-decoration: none;
    font-weight: 400;
  }
</style>