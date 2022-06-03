<template>
		<div class="section">
			<div class="container">
				<div class="row">
          <div class="container">
            <p>Categorias</p>
          </div>
          
          <!-- foreach -->
          <div class="col-md-4 col-xs-6">            
            <div class="shop">
                <div class="shop-img">
                    <img src="../assets/img/kit2.png" alt="">
                </div>
                <div class="shop-body">
                    <h3>
                        titulo
                    </h3>
                    <a href="#link_item" class="cta-btn">
                      Clique Aqui
                      <font-awesome-icon icon="circle-arrow-right" />
                    </a>
                </div>
            </div>
        </div>
        <!-- end foreach -->

				</div>
			</div>
		</div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(function(){
        console.log('asd')
      })
  }
}
</script>
<style>
/*=========================================================
	04 -> CATEGORY SHOP
===========================================================*/

.shop {
  position: relative;
  overflow: hidden;
  margin: 15px 0px;
}

.shop:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0px;
  width: 60%;
  background: #FF6A6A;
  opacity: 0.5;
  -webkit-transform: skewX(-45deg);
  -ms-transform: skewX(-45deg);
  transform: skewX(-45deg);
}

.shop:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1px;
  width: 100%;
  background: #D10024;
  opacity: 0.9;
  -webkit-transform: skewX(-45deg) translateX(-100%);
  -ms-transform: skewX(-45deg) translateX(-100%);
  transform: skewX(-45deg) translateX(-100%);
}

.shop .shop-img {
  position: relative;
  background-color: #E4E7ED;
  z-index: -1;
}

.shop .shop-img>img {
  /*width: 100%;*/
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  width: 300px;
  opacity: 0.6;
}

.shop:hover .shop-img>img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  opacity: 1;
}

.shop .shop-body {
  position: absolute;
  top: 0;
  width: 75%;
  padding: 30px;
  z-index: 10;
}

.shop .shop-body h3 {
  color: #FFF;
}

.shop .shop-body .cta-btn {
  color: #FFF;
  text-transform: uppercase;
}
</style>