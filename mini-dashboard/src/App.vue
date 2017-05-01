
<template>
  <div id="app">

    <h1>Orders</h1>

    <vk-tabs width="1-4"
  :index="index"
  @change="index = arguments[0]">

  <vk-tabs-item name="Orders">

    <vk-table selectable
  striped
  hover
  trackBy="number"
  :selectedRows="selectedRows"
  :fields="[{
    name: 'number',
    sortBy: true,
    header: 'Number'
  },{
    name: 'order_key'
  }, {
    name: 'created_via',
    headerClass: 'vk-table-width-minimum',
    header: 'Created VIA'
  }, {
    name: 'status',
    sortBy: true,
    header: 'Status'
  },{
    name: 'total',
    header: 'Total'
    }]"
  :rows="orders"
  :sortOrder="sortOrder"
  @sort="sortOrder = arguments[0]"
  @change="rows = arguments[0]">
</vk-table>

  </vk-tabs-item>
  <vk-tabs-item name="Tab 2">Content Tab 2</vk-tabs-item>
  <vk-tabs-item name="Tab 3">Content Tab 3</vk-tabs-item>

</vk-tabs>





  </div>
</template>

<script>
import axios from 'axios';
import signature from 'oauth-signature';
import config from './config.js';

export default {
  name: 'app',
  mounted(){



  this.parameters.oauth_nonce = this.oauth_nounc(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
  this.parameters.oauth_timestamp = this.time_s();

  this.get_orders();



  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      sortOrder: {
        number: 'desc'
      },
      index: 0,
      selectedRows: [],
      parameters: {
        "oauth_consumer_key": config.consumer_key,
        "oauth_nonce": null,
        "oauth_timestamp": null,
        "oauth_signature_method": "HMAC-SHA1",
         "oauth_version" : '1.0',
         "per_page": 20,
         "page": 1
      },
      url : "http://hector.whitesharktest.com/clients/rest-dashboard/wp-json/wc/v2/orders",
      orders : []
    }
  },
  methods: {
    oauth_nounc(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    },
    time_s(){
      return Math.round((new Date()).getTime() / 1000);
    },
    get_orders(){

      console.log(this.parameters.page);

        axios({
          method: 'GET',
          url: this.url,
          params: {
            "oauth_consumer_key": config.consumer_key,
            "oauth_timestamp": this.parameters.oauth_timestamp,
            "oauth_nonce": this.parameters.oauth_nonce,
            "oauth_signature": signature.generate('GET', this.url, this.parameters, config.consumer_secret),
            "oauth_signature_method": this.parameters.oauth_signature_method,
            "oauth_version": this.parameters.oauth_version,
            "per_page": this.parameters.per_page,
            "page": this.parameters.page
          }
        })
        .then((response) => {


            this.parameters.page = response.headers['x-wp-totalpages'];
            this.orders = response.data;

          })
          .catch((error)  => {
            console.log("Error: " + error);
          });


    }
  },
  computed: {
    table(){

      let myOrders = [];



      return myOrders;
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
