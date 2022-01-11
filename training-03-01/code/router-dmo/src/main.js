import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const vm = new Vue({
  data() {
    return {
      msg: 'msg',
      obj: {
        a: 1,
        b: 2
      }
    }
  },
  router,
  render: h => h(App)
}).$mount("#app");
console.log(vm);
