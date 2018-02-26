import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "normalize.css/normalize.css";

import AOS from "aos";
import "aos/dist/aos.css";

import VueAnalytics from "vue-analytics";
Vue.use(VueAnalytics, {
  id: "UA-90535731-3"
});

Vue.config.productionTip = false;

new Vue({
  router,
  created() {
    AOS.init({
      disable: "phone"
    });
  },
  render: h => h(App)
}).$mount("#app");
