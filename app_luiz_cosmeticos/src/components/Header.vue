<template>
    <div id="header">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="header-logo">
                        <a href="#" class="logo">
                            <img src="../assets/img/logo_luiz.png" alt="">
                        </a>
                    </div>
                </div>
                
                <!-- <div class="col-md-6">
                  <div class="header-search">
                    <form>
                      <select class="input-select">
                        <option value="0">All Categories</option>
                        <option value="1">Category 01</option>
                        <option value="1">Category 02</option>
                      </select>
                      <input class="input" placeholder="Search here">
                      <button class="search-btn">Search</button>
                    </form>
                  </div>
                </div> -->

                <!-- habilitar hamburguer -->
                <!-- <div class="col-md-3 clearfix">
                    <div class="header-ctn">
                        <div class="menu-toggle">
                            <a href="#">
                                <i class="fa fa-bars"></i>
                                <span>Menu</span>
                            </a>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {

}
</script>
<style>
    
/*=========================================================
	02 -> HEADER
===========================================================*/

/*----------------------------*\
	Top header
\*----------------------------*/

#top-header {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #FF6A6A;
}

.header-links li {
  display: inline-block;
  margin-right: 15px;
  font-size: 12px;
}

.header-links li:last-child {
  margin-right: 0px;
}

.header-links li a {
  color: #FFF;
}

.header-links li a:hover {
  color: #D10024;
}

.header-links li i {
  color: #D10024;
  margin-right: 5px;
}

/*----------------------------*\
	Logo
\*----------------------------*/

#header {
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #FF6A6A;
}

.header-logo {
  float: left;
}

.header-logo .logo img {
  display: block;
}

/*----------------------------*\
	Search
\*----------------------------*/

.header-search {
  padding: 15px 0px;
}

.header-search form {
  position: relative;
}

.header-search form .input-select {
  margin-right: -4px;
  border-radius: 40px 0px 0px 40px;
}

.header-search form .input {
  width: calc(100% - 260px);
  margin-right: -4px;
}

.header-search form .search-btn {
  height: 40px;
  width: 100px;
  background: #D10024;
  color: #FFF;
  font-weight: 700;
  border: none;
  border-radius: 0px 40px 40px 0px;
}

/*----------------------------*\
	Cart
\*----------------------------*/

.header-ctn {
  float: right;
  padding: 15px 0px;
}

.header-ctn>div {
  display: inline-block;
}

.header-ctn>div+div {
  margin-left: 15px;
}

.header-ctn>div>a {
  display: block;
  position: relative;
  width: 90px;
  text-align: center;
  color: #FFF;
}

.header-ctn>div>a>i {
  display: block;
  font-size: 18px;
}

.header-ctn>div>a>span {
  font-size: 12px;
}

.header-ctn>div>a>.qty {
  position: absolute;
  right: 15px;
  top: -10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  font-size: 10px;
  color: #FFF;
  background-color: #D10024;
}

.header-ctn .menu-toggle {
  display: none;
}

.cart-dropdown {
  position: absolute;
  width: 300px;
  background: #FFF;
  padding: 15px;
  -webkit-box-shadow: 0px 0px 0px 2px #E4E7ED;
  box-shadow: 0px 0px 0px 2px #E4E7ED;
  z-index: 99;
  right: 0;
  opacity: 0;
  visibility: hidden;
}

.dropdown.open>.cart-dropdown {
  opacity: 1;
  visibility: visible;
}

.cart-dropdown .cart-list {
  max-height: 180px;
  overflow-y: scroll;
  margin-bottom: 15px;
}

.cart-dropdown .cart-list .product-widget {
  padding: 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.cart-dropdown .cart-list .product-widget:last-child {
  margin-bottom: 0px;
}

.cart-dropdown .cart-list .product-widget .product-img {
  left: 0px;
  top: 0px;
}

.cart-dropdown .cart-list .product-widget .product-body .product-price {
  color: #2B2D42;
}

.cart-dropdown .cart-btns {
  margin: 0px -17px -17px;
}

.cart-dropdown .cart-btns>a {
  display: inline-block;
  width: calc(50% - 0px);
  padding: 12px;
  background-color: #D10024;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.cart-dropdown .cart-btns>a:first-child {
  margin-right: -4px;
  background-color: #FF6A6A;
}

.cart-dropdown .cart-btns>a:hover {
  opacity: 0.5;
}

.cart-dropdown .cart-summary {
  border-top: 1px solid #E4E7ED;
  padding-top: 15px;
  padding-bottom: 15px;
}

</style>