import App from "@/App.vue";
import elementConfig from "@/element-config";
import i18n from "@/i18n";
import router from "@/router";
import store from "@/store";
import { AppConfig } from "@/types";
import Vue, { Component } from "vue";

/**
 * 创建 Vue 实例
 */
function initVue(root: string, component: Component): Vue {
  return new Vue({
    i18n,
    store,
    router,
    render: (h) => h(component),
  }).$mount(root);
}

class MyApp {
  /**
   * Vue 实例
   */
  private vm?: Vue;

  /**
   * 应用配置
   */
  private appConfig: AppConfig = {
    root: "#app",
  };

  /**
   * 版本号
   */
  static version = process.env.VUE_APP_VERSION;

  /**
   * 分支名称
   */
  static branchName = process.env.VUE_APP_BRANCH_NAME;

  /**
   * Git 提交 ID
   */
  static commitId = process.env.VUE_APP_COMMIT_ID;

  /**
   * Git 提交时间
   */
  static commitTime = process.env.VUE_APP_COMMIT_TIME;

  constructor(appConfig: AppConfig) {
    this.appConfig = { ...this.appConfig, ...appConfig };
    this.init();
  }

  /**
   * 初始化应用
   * @method
   */
  private init(): void {
    Vue.config.productionTip = false;
    Vue.use(elementConfig);
    this.vm = initVue(this.appConfig.root, App);
  }
}

if (
  process.env.NODE_ENV === "development" ||
  process.env.VUE_APP_MODE == "production:app"
) {
  // Example Code Start

  /**
   * 实例化应用
   **/
  new MyApp({ root: "#app" });

  // Example Code End
}
