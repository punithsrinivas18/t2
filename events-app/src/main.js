import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
//import autocomplete from './autocomplete.vue';
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false
Vue.use(Buefy);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


