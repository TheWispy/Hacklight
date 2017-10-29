import Vue from 'vue'
import App from './App.vue'
import VueAgile from 'vue-agile'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
Vue.use(VueAgile);

new Vue({
  el: '#app',
  render: h => h(App)
});
