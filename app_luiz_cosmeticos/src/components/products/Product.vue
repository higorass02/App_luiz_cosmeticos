<template>
  <div class="col-md-4 col-xs-6">
      <div class="product">
        <div class="product-img">
            <img src="../../assets/img/kit2.png" alt="">
            <div class="product-label">
              <!-- if desconto -->
                <span class="sale">valor_desconto%</span>
              <!-- if novo -->
              <span class="new">NEW</span>
            </div>
        </div>
        <div class="product-body">
            <p class="product-category">nome_categoria</p>
            <h3 class="product-name"><a href="#">nome_produto</a></h3>
            <!-- if desconto -->
            <h4 class="product-price">R$ preco_atual <del class="product-old-price">R$ preco_antigo</del></h4>
            <!-- else -->
            <!-- <h4 class="product-price">R$ '.$produto['preco'].'</h4> -->

            <div class="product-rating">
                <!-- foreach stars -->
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
            </div>
            <div class="product-btns">
                <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Clique para Ver</span></button>
            </div>
        </div>
        <div class="add-to-cart">
            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>Entrar em Contato</button>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Product'
}
</script>
<style>
/*----------------------------*\
	product
\*----------------------------*/

.product {
  position: relative;
  margin: 15px 5px 10px 5px;
  -webkit-box-shadow: 0px 0px 0px 0px #E4E7ED, 0px 0px 0px 1px #E4E7ED;
  box-shadow: 0px 0px 0px 0px #E4E7ED, 0px 0px 0px 1px #E4E7ED;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.product:hover {
  -webkit-box-shadow: 0px 0px 6px 0px #E4E7ED, 0px 0px 0px 2px #D10024;
  box-shadow: 0px 0px 6px 0px #E4E7ED, 0px 0px 0px 2px #D10024;
}

.product .product-img {
  position: relative;
}

.product .product-img>img {
  width: 100%;
}

.product .product-img .product-label {
  position: absolute;
  top: 15px;
  right: 15px;
}

.product .product-img .product-label>span {
  border: 2px solid;
  padding: 2px 10px;
  font-size: 12px;
}

.product .product-img .product-label>span.sale {
  background-color: #FFF;
  border-color: #D10024;
  color: #D10024;
}

.product .product-img .product-label>span.new {
  background-color: #D10024;
  border-color: #D10024;
  color: #FFF;
}

.product .product-body {
  position: relative;
  padding: 15px;
  background-color: #FFF;
  text-align: center;
  z-index: 30;
}

.product .product-body .product-category {
  text-transform: uppercase;
  font-size: 12px;
  color: #8D99AE;
}

.product .product-body .product-name {
  text-transform: uppercase;
  font-size: 14px;
}

.product .product-body .product-name>a {
  font-weight: 700;
}

.product .product-body .product-name>a:hover, .product .product-body .product-name>a:focus {
  color: #D10024;
}

.product .product-body .product-price {
  color: #D10024;
  font-size: 18px;
}

.product .product-body .product-price .product-old-price {
  font-size: 70%;
  font-weight: 400;
  color: #8D99AE;
}

.product .product-body .product-rating {
  position: relative;
  margin: 15px 0px 10px;
  height: 20px;
}

.product .product-body .product-rating>i {
  position: relative;
  width: 14px;
  margin-right: -4px;
  background: #FFF;
  color: #E4E7ED;
  z-index: 10;
}

.product .product-body .product-rating>i.fa-star {
  color: #ef233c;
}

.product .product-body .product-rating:after {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 1px;
  background-color: #E4E7ED;
}

.product .product-body .product-btns>button {
  position: relative;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: transparent;
  border: none;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.product .product-body .product-btns>button:hover {
  background-color: #E4E7ED;
  color: #D10024;
  border-radius: 50%;
}

.product .product-body .product-btns>button .tooltipp {
  position: absolute;
  bottom: 100%;
  left: 50%;
  -webkit-transform: translate(-50%, -15px);
  -ms-transform: translate(-50%, -15px);
  transform: translate(-50%, -15px);
  width: 150px;
  padding: 10px;
  font-size: 12px;
  line-height: 10px;
  background: #FF6A6A;
  color: #FFF;
  text-transform: uppercase;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.product .product-body .product-btns>button:hover .tooltipp {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translate(-50%, -5px);
  -ms-transform: translate(-50%, -5px);
  transform: translate(-50%, -5px);
}

.product .add-to-cart {
  position: absolute;
  left: 1px;
  right: 1px;
  bottom: 1px;
  padding: 15px;
  background: #FF6A6A;
  text-align: center;
  -webkit-transform: translateY(0%);
  -ms-transform: translateY(0%);
  transform: translateY(0%);
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  z-index: 2;
}

.product:hover .add-to-cart {
  -webkit-transform: translateY(100%);
  -ms-transform: translateY(100%);
  transform: translateY(100%);
}

.product .add-to-cart .add-to-cart-btn {
  position: relative;
  border: 2px solid transparent;
  height: 40px;
  padding: 0 30px;
  background-color: #ef233c;
  color: #FFF;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 40px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.product .add-to-cart .add-to-cart-btn>i {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  line-height: 38px;
  color: #D10024;
  opacity: 0;
  visibility: hidden;
}

.product .add-to-cart .add-to-cart-btn:hover {
  background-color: #FFF;
  color: #D10024;
  border-color: #D10024;
}

.product .add-to-cart .add-to-cart-btn:hover>i {
  opacity: 1;
  visibility: visible;
}
</style>