import Vue from "vue";
import VueRouter from "vue-router";
// import App from "../../src/App.vue";
import List from "../components/list.vue"
import Home from "../components/Home.vue"
import Detail from "../components/Detail.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
