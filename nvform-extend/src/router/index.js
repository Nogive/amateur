import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import HelloWorld from "@/components/HelloWorld";
export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});
