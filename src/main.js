import Vue from 'vue'
import App from './App.vue'
import VuePrism from 'vue-prism'
Vue.use(VuePrism)
import 'prismjs/themes/prism.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
