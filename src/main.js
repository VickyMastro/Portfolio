import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Bootstrap-Vue
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

// ScrollTo
import vueScrollto from 'vue-scrollto'
Vue.use(vueScrollto, {
  duration: 100,
})

new Vue({
  render: h => h(App),
}).$mount('#app')
