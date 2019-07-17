import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

Vue.config.productionTip = false
locale.use(lang)
Vue.use(ElementUI, { locale })

new Vue({
  render: h => h(App)
}).$mount('#app')
