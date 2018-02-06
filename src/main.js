import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "hover.css/css/hover-min.css";
import "./animate.css";

import "chart.js/dist/Chart.min.js";
import "./vue-charts";
Vue.use(VueCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
