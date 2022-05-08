<template>
  <div id="newsletter" class="section">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="newsletter">
					  <p>Nos Envio o seu E-Mail para receber as  <strong>NOVIDADES</strong></p>
						<form>
							<input class="input" type="email" placeholder="Entre com seu E-Mail">
							<button class="newsletter-btn">
                <font-awesome-icon icon="envelope" />
                Enviar
              </button>
						</form>
						<ul class="newsletter-follow">
              <li>
                <a target="_blank" href="#linkFacebook">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
                </a>
              </li>
              <li>
                <a target="_blank" href="#linkTwitter">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
                </a>
              </li>
              <li>
                <a target="_blank" href="#linkInstagram">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                </a>
              </li>
              <li>
                <a target="_blank" href="#linkPintrest">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'pinterest' }"/>
                </a>
              </li>
						</ul>
					</div>
				</div>
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
	10 -> NEWSLETTER
===========================================================*/

#newsletter.section {
  border-top: 2px solid #E4E7ED;
  border-bottom: 3px solid #D10024;
  margin-top: 30px;
}

.newsletter {
  text-align: center;
}

.newsletter p {
  font-size: 24px;
}

.newsletter form {
  position: relative;
  max-width: 520px;
  margin: 30px auto;
}

.newsletter form:before {
  content: "\2709";
  font-family: FontAwesome;
  position: absolute;
  font-size: 160px;
  font-weight: 900;
  color: #E4E7ED;
  top: 15px;
  -webkit-transform: translateY(-50%) rotate(15deg);
  -ms-transform: translateY(-50%) rotate(15deg);
  transform: translateY(-50%) rotate(15deg);
  z-index: -1;
  left: -90px;
}

.newsletter form .input {
  width: calc(100% - 160px);
  margin-right: -4px;
  border-radius: 40px 0px 0px 40px;
}

.newsletter form .newsletter-btn {
  width: 160px;
  height: 40px;
  font-weight: 700;
  background: #D10024;
  color: #FFF;
  border: none;
  border-radius: 0px 40px 40px 0px;
}

.newsletter .newsletter-follow {
  text-align: center;
}

.newsletter .newsletter-follow li {
  display: inline-block;
  margin-right: 5px;
}

.newsletter .newsletter-follow li:last-child {
  margin-right: 0px;
}

.newsletter .newsletter-follow li a {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #E4E7ED;
  background-color: #FFF;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.newsletter .newsletter-follow li a:hover, .newsletter .newsletter-follow li a:focus {
  background-color: #E4E7ED;
  color: #D10024;
}
</style>