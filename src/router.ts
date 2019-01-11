import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/ripple",
      name: "ripple",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "ripple" */ "./views/Ripple.vue")
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: () => import(/* webpackChunkName: "cloud" */ "./views/Cloud.vue")
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: () => import(/* webpackCunkName: "lifecycle" */ "./views/Lifecycle.vue")
    }
  ]
});
