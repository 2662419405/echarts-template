import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Echarts from 'echarts'
import './plugins/element.js'
import './style/index.scss'

Vue.prototype.$echarts = Echarts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
