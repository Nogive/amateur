// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import vueNcform from "@ncform/ncform";

//import Element from "element-ui";
//import "element-ui/lib/theme-chalk/index.css";
//import ncformStdComps from "@ncform/ncform-theme-elementui";
import myCustomComp from "@/components/myCustomComp"; // 自定义的控件
import myCustomOther from "@/components/myCustomOther"; // 自定义的控件

//Vue.use(Element);
// Vue.use(vueNcform, {
//   extComponents: Object.assign(ncformStdComps, { myCustomComp, myCustomOther })
// });
Vue.use(vueNcform, { extComponents: { myCustomComp, myCustomOther } });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
