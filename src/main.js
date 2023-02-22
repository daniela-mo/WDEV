import Vue from "vue";
import App from "./App.vue";
// eslint-disable-next-line
import router from "./routes/router.js";

Vue.config.productionTip = false;

new Vue({
  // eslint-disable-next-line
  router,
  render: (h) => h(App),
}).$mount("#app");
