import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Update from "./views/Update.vue";
import Rockets from "./views/Rockets.vue";
import RocketDetail from "./views/RocketDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/counter",
      name: "counter",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Update
    },
    {
      path: "/rockets",
      name: "rockets",
      component: Rockets
    },
    {
      path: "/rockets/:id",
      name: "rocket",
      component: RocketDetail
    }
  ]
});
