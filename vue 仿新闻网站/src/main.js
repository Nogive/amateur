import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import filters from "./filters";
import "./assets/css/base.css";

//过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

//axios配置
//发送请求数据
axios.interceptors.request.use(
  function(config) {
    store.dispatch("showLoading");
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
//请求结束回来
axios.interceptors.response.use(
  function(response) {
    store.dispatch("hideLoading");
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://localhost:8082/';
//其他页面在使用axios的时候直接  this.$http就可以了
Vue.prototype.$http = axios;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
