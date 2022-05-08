<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title">
            <h3 class="title">Novos Produtos</h3>
          </div>
          <div class="section-nav">
            <ul class="section-tab-nav tab-nav row">
              <Product/>
              <Product/>
              <Product/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Product from './Product.vue'
export default {
  components:{
    Product
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

.products-slick .slick-list {
  padding-bottom: 60px;
  margin-bottom: -60px;
  z-index: 2;
}

.products-slick .product.slick-slide {
  margin: 15px;
}

.products-tabs>.tab-pane {
  display: block;
  height: 0;
  opacity: 0;
  visibility: hidden;
  overflow-y: hidden;
  padding-bottom: 60px;
  margin-bottom: -60px;
}

.products-tabs>.tab-pane.active {
  opacity: 1;
  visibility: visible;
  height: auto;
}

.products-slick-nav {
  position: absolute;
  right: 15px;
  z-index: 10;
}

.products-slick-nav .slick-prev, .products-slick-nav .slick-next {
  position: static;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  width: 20px;
  height: 20px;
  display: inline-block !important;
  margin: 0px 2px;
}

.products-slick-nav .slick-prev:before, .products-slick-nav .slick-next:before {
  font-size: 14px;
}

#product-tab .tab-nav {
  position: relative;
  text-align: center;
  padding: 15px 0px;
  margin-bottom: 30px;
}

#product-tab .tab-nav:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background-color: #E4E7ED;
  z-index: -1;
}

#product-tab .tab-nav li {
  display: inline-block;
  background: #FFF;
  padding: 0px 15px;
}

#product-tab .tab-nav li+li {
  margin-left: 15px;
}

#product-tab .tab-nav li a {
  display: block;
  font-weight: 700;
  color: #8D99AE;
}

#product-tab .tab-nav li.active a {
  color: #D10024;
}

#product-tab .tab-nav li a:after {
  content: "";
  display: block;
  width: 0%;
  height: 2px;
  background-color: #D10024;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

#product-tab .tab-nav li a:hover:after, #product-tab .tab-nav li a:focus:after, #product-tab .tab-nav li.active a:after {
  width: 100%;
}
</style>