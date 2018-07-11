import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "./components/Home.vue";
import Follow from "./components/Follow.vue";
import Column from "./components/Column.vue";
import UserInfo from "./components/UserInfo.vue";
import UserLogin from "./components/UserLogin.vue";
import UserReg from "./components/UserReg.vue";
import Article from "./components/Article.vue";

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/follow",
    component: Follow
  },
  {
    path: "/column",
    component: Column
  },
  {
    path: "/user-info",
    component: UserInfo
  },
  {
    path: "/user-login",
    component: UserLogin
  },
  {
    path: "/user-reg",
    component: UserReg
  },
  {
    path: "/article/:id",
    component: Article
  }
];
const router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({
    y: 0
  }),
  routes
});
export default router;
