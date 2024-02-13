import App from "@/App.vue";
import i18n from "@/i18n";
import router from "@/router";
import store from "@/store";
import { AppConfig } from "@/types";
import package1 from "@vue2-typescript-template/package-1";
import package2 from "@vue2-typescript-template/package-2";
import Vue, { Component } from "vue";

package1();
package2();

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
  }

  /**
   * 初始化应用
   * @method
   */
  public async init(cb?: () => void): Promise<void> {
    Vue.config.productionTip = false;
    Vue.prototype.$appConfig = this.appConfig;
    const elementConfig = await import(
      /* webpackChunkName: "element-config" */ "@/element-config"
    );
    Vue.use(elementConfig.default);
    this.vm = initVue(this.appConfig.root, App);
    typeof cb === "function" && cb();
  }
}

if (
  process.env.NODE_ENV === "development" ||
  process.env.VUE_APP_MODE == "production:app"
) {
  // Example Code Start

  /**
   * 实例化应用
   */
  const app = new MyApp({ root: "#app" });

  /**
   * 初始化应用
   */
  app.init();

  // Example Code End
}

export default MyApp;
