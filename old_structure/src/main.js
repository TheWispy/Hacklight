import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueCarousel);

new Vue({
  el: '#app',
  http: { root: '/' },
  render: h => h(App)
});
