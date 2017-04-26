
<template>
  <div id="app">





  </div>
</template>

<script>
import axios from 'axios';
import config from './config.js';

export default {
  name: 'app',
  mounted(){

    const url = "http://hector.whitesharktest.com/clients/rest-dashboard/wp-json/wc/v2/orders",
        config_get = {
            auth: {
              username: config.consumer_key,
              password: config.consumer_secret
            }

          };

    axios.get(url, config_get)
    .then(function(response){
      console.log(response);
    })
    .catch(function (error) {
      console.log("Fucking Error: " + error);
    });



  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false
    }
  }
}
</script>

<style>
 @import '~/node_modules/vuikit-theme/dist/css/vuikit.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
