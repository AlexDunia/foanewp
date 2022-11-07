<template>
  <div class="herobg"> 
  <div class="container">

    <div className="heroflex">
    <div className="herotext">
    <!-- Text div -->
    <h1> Treat yourself with the <br/> best Kilishi and <br/> 
    Kuli Kuli.</h1>
    <p> Get the best quality and most delicious Kilishi and Kulikuli. <br/>  You can do this by quickly placing  
      an order</p>
      <button class="btn success"> Order now</button>
    <!-- End of text div under-->
  </div>

  <div className="heroimg">
    <img src="../assets/platebg.png"/>
  </div>

  </div>
  <!-- last two divs -->
  </div>
</div>

<!-- products part -->
<div className="pgrid">
<div className="allproducts" v-for="(product, i) in myproducts" :key="i">
  <ul> 
  <li> <img :src="product.Img"/> </li>
  <li> {{product.Name}}  </li>
  <li> {{product.Price}} </li>
  </ul>
</div> 
</div>

</template>

<script>
// @ is an alias to /src

export default {
props: ['myproducts'],

}

</script>

<style src="../assets/style.css">
</style> 
