<template>
  <div className="navbg">
    <div class="container">
  <nav>
    <div className="logoflex"> 
      <img src="./assets/bbtlogo.png"> 
    </div>

    <div className="navflex"> 
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
    <router-link to="/cart"> My cart <img src="./assets/shopbag.png"> </router-link>
    </div>

    <!-- <div className="cartflex"> 
      <img src="./assets/shopbag.png"> 
    </div> -->

  </nav>
</div>
</div> 
  <router-view :myproducts="products"/>
</template>

<script> 
import Kilishi30kg from './assets/kilishipack.png'

export default {
  data() {
    return {
      products:[
        {
          Img: Kilishi30kg,
          Name: "Kilishi 30kg",
          Price: "N1000"},
          {
          Img: Kilishi30kg,
          Name: "Kilishi 30kg",
          Price: "N1000"},
          {
          Img: Kilishi30kg,
          Name: "Kilishi 30kg",
          Price: "N1000"}
      ]
    }
  }
}

</script>