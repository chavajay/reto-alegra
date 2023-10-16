import { createPinia, PiniaVuePlugin } from 'pinia'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueCompositionAPI from '@vue/composition-api';

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.use(VueCompositionAPI);

new Vue({
  router,
  vuetify,
  pinia,
  render: h => h(App)
}).$mount('#app')
