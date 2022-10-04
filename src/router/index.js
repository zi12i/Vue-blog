import Vue from "vue";
import VueRouter from "vue-router";
// import App from "../../src/App.vue";
import List from "../components/list.vue"
import Home from "../components/Home.vue"
import Detail from "../components/Detail.vue"
import Author from "../components/Author.vue"
import Comment from "../components/Comment.vue"

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
    path: "/detail/:id",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author
      },
      {
        path: "comment",
        component: Comment
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
