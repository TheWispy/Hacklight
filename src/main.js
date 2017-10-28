import Vue from 'vue'
import App from './App.vue'
import VueAgile from 'vue-agile'

Vue.use(VueAgile);

new Vue({
  el: '#app',
  render: h => h(App)
});
