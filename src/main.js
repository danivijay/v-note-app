import Vue from 'vue'
import App from './components/App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)

Vue.directive('rainbow', {
  bind (el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2,8)
  } 
})

Vue.filter('firstUpperCase', (val) => {
  return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
})

Vue.filter('snippet', (val) => val.slice(0, 150) + '...' )

new Vue({
  el: '#app',
  render: h => h(App)
})
