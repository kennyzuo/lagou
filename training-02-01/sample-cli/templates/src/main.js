/* eslint-disable no-console */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import rtXpc from 'vue-xpc';
import lookupFetch from './lookup-fetch.js';
import './assets/icons';

Vue.use(rtXpc);
Vue.lookup.resetFetch(lookupFetch);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
