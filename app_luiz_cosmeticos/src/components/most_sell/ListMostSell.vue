<template>
<div class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-xs-6">
          <div class="section-title">
            <h4 class="title">Mais Vendidos</h4>
              <div class="section-nav">
                <div id="slick-nav-3" class="products-slick-nav"></div>
              </div>
            </div>
            <div class="products-widget-slick" data-nav="#slick-nav-3">
              <div>
                <!-- foeach -->
                <Itens/>
                <Itens/>
                <Itens/>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ref } from 'vue'
import Itens from './ItemMostSell.vue'
export default {
  components:{
    Itens
  }
}
</script>
<style>

.section-title {
  position: relative;
  margin-bottom: 30px;
  margin-top: 15px;
}

.section-title .title {
  display: inline-block;
  text-transform: uppercase;
  margin: 0px;
}

.section-title .section-nav {
  float: right;
}

.section-title .section-nav .section-tab-nav {
  display: inline-block;
}

.section-title .section-nav .products-slick-nav {
  top: 0px;
  right: 0px;
}

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