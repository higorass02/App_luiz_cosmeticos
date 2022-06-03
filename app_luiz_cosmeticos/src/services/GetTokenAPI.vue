<script>
import axios from 'axios'
// axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://api-sanctum-aplicativos.herokuapp.com/api";
sessionStorage.setItem('token', '');
export default {
  beforeMount () {
    console.log(sessionStorage.getItem('token'))
    axios({
      method: "get",
      url: "/me",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      },
    }).catch( res => {
      let response = res.response
      if(response.status == 401){
        console.log('nao autenticado')
        this.logar()
      }
    } );

      // axios({
      //   method: "get",
      //   url: "/categories",
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //     'authorization': 'Bearer 1|PPKgbrYoNGwEjd23gZa5TWqZtZOBQyNOi3eMLpJD',
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      //     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      //   },
      // });
  },
  methods: {
    logar() {
      axios({
        method: "post",
        url: "/auth/login",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        },
        data: {
          email: "higoraugusto120@gmail.com",
          password: "123456"
        }
      })
      .then(res => {
        let response = res.data
        sessionStorage.setItem('token', response.data.token);
        console.log(sessionStorage.getItem('token'))
        
      })
      .catch(res => console.log(res))
    }
  }
}
</script> 