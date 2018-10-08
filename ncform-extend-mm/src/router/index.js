import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import MyNcform from "@/components/MyNcform";
import HelloWorld from "@/components/HelloWorld";
export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "MyNcform",
      component: MyNcform
    },
    {
      path: "/sample",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});
