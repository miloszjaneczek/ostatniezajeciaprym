import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.http.options.root = '/api';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
