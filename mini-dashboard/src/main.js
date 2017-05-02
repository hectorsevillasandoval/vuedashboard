import Vue from 'vue'
import App from './App.vue'
import config from './config.js'
import Vuikit from 'vuikit'
import totals from "./totals.vue"

Vue.use(Vuikit)

Vue.component("totals", totals);


new Vue({
  el: '#app',
  render: h => h(App)
})
