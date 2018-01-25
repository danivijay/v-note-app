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

new Vue({
  el: '#app',
  render: h => h(App)
})
