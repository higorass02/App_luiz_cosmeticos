<script>
import axios from 'axios'
// axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://api-sanctum-aplicativos.herokuapp.com/api";
sessionStorage.setItem('categorias', '');
let retorno = null
export default {
  methods: {
    getCategory(){
      axios({
        method: "get",
        url: "/categories",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization': 'Bearer '+sessionStorage.getItem('token'),
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },
      }).then( res => {
        sessionStorage.setItem('categorias', res.data.data);
        console.log('buscou')
        this.retorno = res.data.data
      }); 
      return this.retorno  
    }
  }
}
</script> 