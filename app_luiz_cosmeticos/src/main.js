import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faCircleArrowRight,faStar,faEye,faShoppingCart, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faCircleArrowRight, faStar, faEye, faShoppingCart, faEnvelope, faFacebook, faTwitter, faInstagram, faPinterest);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");