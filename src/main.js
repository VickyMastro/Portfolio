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

// dark mode
import VueDarkMode from '@vue-a11y/dark-mode'
Vue.use(VueDarkMode)

new Vue({
  render: h => h(App),
}).$mount('#app')
