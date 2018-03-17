import Vue from "vue";
import Router from "vue-router";

import Index from "./views/index.vue";
import Projects from "./views/projects.vue";
import Thanks from "./views/thanks.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Index },
    { path: "/projects", component: Projects },
    { path: "/thanks", component: Thanks }
  ]
});
