<template>
    <footer id="footer">
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-xs-6">
                    <div class="footer">
                        <h3 class="footer-title">Sobre Mim</h3>
                        <p>Trecho da Biografia! bla bla bla bla bla bla bla bla bla bla bla bla</p>
                        <ul class="footer-links">
                            <li><i class="fa fa-map-marker"></i>Localização Em Breve!</li>
                            <li><a href="#enviar-para-whats"><i class="fa fa-phone"></i>+55 (24) 9 9999-9999</a></li>
                            <li>
                              <i class="fa fa-envelope-o"></i>
                              <label for="">email@email.com</label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-xs-6">
                    <div class="footer">
                        <h3 class="footer-title">Categorias</h3>
                        <ul class="footer-links">
                          <!-- foreach caregoriaArray -->
                          <li><a href="#">titulo</a></li>
                        </ul>
                    </div>
                </div>
                <div class="clearfix visible-xs"></div>
                <div class="col-md-3 col-xs-6">
                    <div class="footer">
                        <h3 class="footer-title">Serviços</h3>
                        <ul class="footer-links">
                            <li><a href="#">Catálago de Serviços</a></li>
                            <li><a href="#">Área de Atendimento</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="bottom-footer" class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <ul class="footer-payments">
                        <!-- <li><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'faCcVisa' }"/></li>
                        <li><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'faCcMastercard' }"/></li>
                        <li><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'faCreditCard' }"/></li> -->
                    </ul>
                    <span class="copyright">
                        Copyright 2022 Todos os Direitos Reservados a EMPRESA
                        <!-- <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'ccVisa' }"/> -->
                        <!-- <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'ccMastercard' }"/>
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'creditCard' }"/> -->
                        <!-- <font-awesome-icon icon="fa-credit-card" /> -->
                    </span>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
import { ref } from 'vue'
export default {
}
</script>
<style>
/*=========================================================
	11 -> FOOTER
===========================================================*/

#footer {
  background: #CD5555;
  color: #B9BABC;
}

#bottom-footer {
  background: #D10024;
}

.footer {
  margin: 30px 0px;
}

.footer .footer-title {
  color: #FFF;
  text-transform: uppercase;
  font-size: 18px;
  margin: 0px 0px 30px;
}

.footer-links li+li {
  margin-top: 15px;
}

.footer-links li a {
  color: #B9BABC;
}

.footer-links li i {
  margin-right: 15px;
  color: #D10024;
  width: 14px;
  text-align: center;
}

.footer-links li a:hover {
  color: #D10024;
}

.copyright {
  margin-top: 30px;
  display: block;
  font-size: 12px;
}

.footer-payments li {
  display: inline-block;
  margin-right: 5px;
}

.footer-payments li a {
  color: #15161D;
  font-size: 36px;
  display: block;
}
</style>