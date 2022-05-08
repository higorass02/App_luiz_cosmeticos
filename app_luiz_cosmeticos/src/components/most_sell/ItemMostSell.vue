<template>
  <div class="product-widget">
    <div class="product-img">
        <img src="../../assets/img/kit2.png" alt="">
    </div>
    <div class="product-body">
        <p class="product-category">nome_categoria</p>
        <h3 class="product-name"><a href="#">nome_produto</a></h3>
        <!-- if desconto -->
        <h4 class="product-price">          
          <del class="product-old-price">R$ preco_antigo</del>
          <br>
          R$ preco
        </h4>
        <!-- else -->
        <!-- <h4 class="product-price">R$ '.$produto['preco'].' </h4> -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  components:{
  }
}
</script>
<style>
/*----------------------------*\
	Widget product
\*----------------------------*/

.product-widget {
  position: relative;
}

.product-widget+.product-widget {
  margin: 30px 0px;
}

.product-widget .product-img {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 60px;
}

.product-widget .product-img>img {
  width: 100%;
}

.product-widget .product-body {
  padding-left: 75px;
  min-height: 60px;
}

.product-widget .product-body .product-category {
  text-transform: uppercase;
  font-size: 10px;
  color: #8D99AE;
}

.product-widget .product-body .product-name {
  text-transform: uppercase;
  font-size: 12px;
}

.product-widget .product-body .product-name>a {
  font-weight: 700;
}

.product-widget .product-body .product-name>a:hover, .product-widget .product-body .product-name>a:focus {
  color: #D10024;
}

.product-widget .product-body .product-price {
  font-size: 14px;
  color: #D10024;
}

.product-widget .product-body .product-price .product-old-price {
  font-size: 70%;
  font-weight: 400;
  color: #8D99AE;
}

.product-widget .product-body .product-price .qty {
  font-weight: 400;
  margin-right: 10px;
}

.product-widget .delete {
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  text-align: center;
  font-size: 10px;
  padding: 0;
  background: #FF6A6A;
  border: none;
  color: #FFF;
}
</style>