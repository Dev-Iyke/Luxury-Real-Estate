<template>
  <div class="contact">
    <div class="left">
        <h2>Let's connect</h2>
        <div class="info">
            <div class="info-left">
                <p>Phone</p>
                <p>Email</p>
                <p>Address</p>
            </div>
            <div class="info-right">
                <p>+234 903 0997 226</p>
                <p>obasiikechukwu761@gmail.com</p>
                <p>Prospekt Ltd <br>Drazice 138, 51 000 Rijeka <br>Croatia</p>
            </div>
        </div>
        <div class="links">
        <a href="#"><img src="../assets/footer-imgs/link-3.png" alt="links"></a>
        <a href="#"><img src="../assets/footer-imgs/link-1.png" alt="links"></a>
        <a href="#"><img src="../assets/footer-imgs/link-2.png" alt="links"></a>
      </div>
    </div>
    <div class="right">
        <Form action="send">
            <h2>We'd love to hear from you</h2>
            <div class="input">
                <input type="text" placeholder="Your Name">
                <input type="email" placeholder="Email">
            </div>
            <textarea name="" id="" cols="30" rows="3" placeholder="Message"></textarea>
            <p><input type="checkbox"> I accept the Terms and conditions</p>
            <button>SEND</button>
        </Form>
    </div>
  </div>
</template>

<script>
export default {
    name: "Contact",

}
</script>

<style scoped>
.contact{
    display: flex;
    width: 70%;
    margin: 0 auto;
    font-family: "Rufina", sans-serif;
    gap: .8rem;
}
.left {
    background-color: #181D24;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 3rem 2.7rem 0;
    border-radius: 5px 35px 5px 5px;
}
.left h2{
    font-size: 2rem;
    color: #F5E9D6;
}
.left .info{
    display: flex;
    gap: .6rem;
}
.left .info .info-left, .left .info .info-right{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: .8rem;
}
.left .info .info-right p{
    font-weight: 200;
    font-family: "Raleway", sans-serif;
}
.links{
    margin-top: 2rem;
}
.links a img{
    background-color: white;
}
.right{
    background-color: white;
    padding: 3rem;
    border-radius: 5px 5px 35px 5px;
    font-family: "Raleway", sans-serif;
}
.right h2{
    font-size: 2.22rem;
    font-family: "Rufina", sans-serif;
}
form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.input{
    display: flex;
    gap: .6rem;
    width: 100%;
}
.input input, textarea{
    border: none;
    outline: none;
    padding: .4rem 0;
    border-bottom: 1.5px solid black;
    width: 100%;
    font-family: "Raleway", sans-serif;
    font-weight: 500;
}
.input input::placeholder, textarea::placeholder{
    color: #5B656F;
    font-weight: 400;
}
form p{
    font-size: .75rem;
}
form button{
    background-color: #5B656F;
    outline: none;
    border: none;
    padding: .7rem;
    width: 25%;
    color: white;
    border-radius: 0px 10px 10px 10px;
    margin-top: 1rem;
}

</style>