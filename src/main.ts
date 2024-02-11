import App from "@/App.vue";
import elementConfig from "@/element-config";
import i18n from "@/i18n";
import router from "@/router";
import store from "@/store";
import Vue from "vue";

Vue.config.productionTip = false;

Vue.use(elementConfig);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
