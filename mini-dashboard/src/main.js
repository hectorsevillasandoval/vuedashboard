import Vue from 'vue'
import App from './App.vue'
import config from './config.js'
import Vuikit from 'vuikit'

Vue.use(Vuikit)



new Vue({
  el: '#app',
  Vuikit,
  render: h => h(App)
})
