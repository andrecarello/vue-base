import Vue from "vue";
import VueRouter from "vue-router";

const load = (path) => () =>
  import(/* webpackChunkName: "[request]" */ `../resources/views/${path}.vue`);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "KanbanBoardRoute",
    component: load("user/user.view"),
    meta: {
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
