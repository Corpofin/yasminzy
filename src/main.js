import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";

import "normalize.css/normalize.css";

import AOS from "aos";
import "aos/dist/aos.css";

import VueAnalytics from "vue-analytics";
Vue.use(VueAnalytics, {
  id: "UA-90535731-3"
});

import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
