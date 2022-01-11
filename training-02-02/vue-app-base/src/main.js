import Vue from 'vue'
import App from './App.vue'

import './style.less'
const fn = () => {
  console.log('fn')
}
fn()
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
