import Vue from 'vue'
import App from './components/App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import vueRouter from 'vue-router'
import Routes from './routes'

Vue.use(vueRouter)
Vue.use(Vuetify)

const router = new vueRouter ({
  routes: Routes,
  mode: 'hash'
})

// custom directives - defined the same locally
// Vue.directive('rainbow', {
//   bind (el, binding, vnode) {
//     el.style.color = '#' + Math.random().toString(10).slice(2,8)
//   } 
// })

// custom filters
Vue.filter('firstUpperCase', (val) => {
  return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
