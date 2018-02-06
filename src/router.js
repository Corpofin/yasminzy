import About from "./views/about";
import Contact from "./views/contact";
import Hire from "./views/hire";
import Home from "./views/home";
import PostItem from "./components/post-item";
import PostLayout from "./components/post-layout";
import Posts from "./views/posts";
import Projects from "./views/projects";
import Router from "vue-router";
import Sent from "./views/sent";
import Services from "./views/services";
import Vue from "vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/hire", component: Hire },
    { path: "/projects", component: Projects },
    { path: "/sent", component: Sent },
    { path: "/services", component: Services },
    {
      path: "/posts",
      component: PostLayout,
      children: [
        { path: "", component: Posts },
        { path: ":title", component: PostItem }
      ]
    }
  ]
});
