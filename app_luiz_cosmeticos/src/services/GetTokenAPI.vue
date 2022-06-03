<script>
import axios from 'axios'
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://api-sanctum-aplicativos.herokuapp.com/api";
export default {
  mounted () {
    // axios
    //   .get('/me')
    //   .then(data => console.log('asd 1'))
    //   .catch(data => {
    //     let codeResponse = data.response.status;
    //     if(codeResponse == '401') {
    //       console.log('nao autorizado')
    //       console.log('solicitar token')
    //     }
    //   })

      axios({
        method: "get",
        url: "/categories",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization': 'Bearer 1|PPKgbrYoNGwEjd23gZa5TWqZtZOBQyNOi3eMLpJD',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },
      });
  }
}

//   axios({
//     method: "get",
//     url: base_url+"/me",
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//   })
//   .then(response => {
//     console.log(response); //This is one success but it did set cookie in application cookie
//   })
//   .catch(data => {
//       axios
//       .post("/auth/login", {
//         email: "higor@gmail.com",
//         password: "1234560"
//       })
//       .then(res => {
//         console.log(res);
//       }); // this one failed with 419 csrf token mismatch
//   });
// }
// mounted () {
//   // let base_url = 'https://api-sanctum-aplicativos.herokuapp.com/api'
//   let base_url = 'http://localhost:8000/api'
</script> 