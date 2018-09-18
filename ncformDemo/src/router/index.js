import Vue from "vue";
import Router from "vue-router";
import ncformElement from "@/components/ncformElement/demo";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "element",
      component: ncformElement
    }
  ]
});
