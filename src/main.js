import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
